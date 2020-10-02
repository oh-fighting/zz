/*
 * @Author: 朱文栋
 * @Date: 2020-09-13 11:46:27
 * @LastEditTime: 2020-10-02 01:21:08
 * @LastEditors: Please set LastEditors
 * @Description: 修复代码警告和无用代码
 */

import styles from './home.module.less';
import React from 'react';
import { NavBar, Icon, Carousel, WingBlank, Popover } from 'antd-mobile';
import { renderAllRoutes } from '@routes/route-loader';
import { Switch, RouteComponentProps } from 'react-router-dom';
import Tabbar from '@components/tabbar/tabbar.tsx';
import { getSwiperImg } from 'src/services/api/index/index'

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
            swiperImg: [],
            imgHeight: 176,
            visible: false,
            selected: '',
        };
        localStorage.setItem('token', 'login');
    }
    componentDidMount() {
        getSwiperImg().then(res => {
            if (res.data.code == 200) {
                this.setState({ swiperImg: res.data.data.data })
            }
        }).catch(err => {
            // console.log("err:", err)
        })
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
                        {this.state.swiperImg.map(val => (
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
            </div>
        );
    }
}
