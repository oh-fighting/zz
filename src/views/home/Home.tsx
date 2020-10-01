/*
 * @Author: 朱文栋
 * @Date: 2020-09-13 11:46:27
 * @LastEditTime: 2020-09-17 20:56:03
 * @LastEditors: Please set LastEditors
 * @Description: 修复代码警告和无用代码
 */

import styles from './home.module.less';
import React from 'react';
import { NavBar, Icon, Carousel, WingBlank, Popover } from 'antd-mobile';
import { renderAllRoutes } from '@routes/route-loader';
import { Switch, RouteComponentProps } from 'react-router-dom';
import TabBarExample from '@components/tabbar/tabbar.tsx';

function mapStateToProps(state) {
    return state;
}

interface RouterProps extends RouteComponentProps<any> { } //路由参数 Props 类型声明
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>; //映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
/**
 * 组件派发 action 集合的类型声明
 * type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;
 * 组件最终接收的所有 Props 类型声明
 */
type HomeProps = RouterProps &
    MapStateFromStoreProps & {
        routes?: any;
    };
const myImg = src => (
    <img
        src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
        className="am-icon am-icon-xs"
        alt=""
    />
);
const Item: any = Popover.Item;
export default class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2108032947,475871746&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1321592062,4008367638&fm=26&gp=0.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600357050126&di=5c25f6c2cdc875f8b5be493ba05363a8&imgtype=0&src=http%3A%2F%2Fup.kukudesk.com%2Fpic_360%2F5a%2Ffe%2F8b%2F5afe8bb2ca3dd7e17de862b3041eb719.jpg'],
            imgHeight: 176,
            visible: false,
            selected: '',
        };
        localStorage.setItem('token', 'login');
    }
    componentDidMount() {
    }
    goBack(): void {
        this.props.history.goBack();
    };
    onSelect = opt => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        //const routes = renderAllRoutes(this.props.routes);
        return (
            <div className={styles.container}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.goBack.bind(this)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Popover
                            key="1"
                            mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                <Item
                                    key="4"
                                    value="scan"
                                    icon={myImg('tOtXhkIWzwotgGSeptou')}
                                    data-seed="logId"
                                >
                                    扫一扫
                                </Item>,
                                <Item
                                    key="5"
                                    value="special"
                                    icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    我的二维码
                                </Item>,
                                <Item
                                    key="6"
                                    value="button ct"
                                    icon={myImg('uQIYTFeRrjPELImDRrPt')}
                                >
                                    <span style={{ marginRight: 5 }}>帮助</span>
                                </Item>,
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div
                                style={{
                                    height: '100%',
                                    padding: '0 15px',
                                    marginRight: '-15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>,
                    ]}
                >
                    首页
                </NavBar>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => { }}
                        afterChange={index => { }}
                    >
                        {this.state.data.map(val => (
                            <img
                                src={`${val}`}
                                alt=""
                                key={val}
                                style={{ width: '100%', verticalAlign: 'top', touchAction: 'none' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />

                        ))}
                    </Carousel>
                </WingBlank>
                <TabBarExample />
            </div>
        );
    }
}
