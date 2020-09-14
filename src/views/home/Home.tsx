/*
 * @Author: 朱文栋
 * @Date: 2020-09-13 11:46:27
 * @LastEditTime: 2020-09-14 23:01:01
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
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            imgHeight: 176,
            visible: false,
            selected: '',
        };
        localStorage.setItem('token', 'login');
    }
    componentDidMount() { }
    handleLinkToRegisterBtnClick = () => {
        this.props.history.push('/register');
    };
    onSelect = opt => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = visible => {
        this.setState({
            visible,
        });
    };
    handleLinkToChildOneBtnClick = () => {
        this.props.history.push('/home/child-one');
    };
    handleLinkToChildTwoBtnClick = () => {
        this.props.history.push('/home/child-two');
    };

    render() {
        //const routes = renderAllRoutes(this.props.routes);
        return (
            <div className={styles.container}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleLinkToRegisterBtnClick}
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
                {/* 用于调试路由跳转
                <button onClick={this.handleLinkToChildOneBtnClick}>to child-one</button>
                <button onClick={this.handleLinkToChildTwoBtnClick}>to child-two</button> */}
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => { }}
                        afterChange={index => { }}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="#!"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: this.state.imgHeight,
                                }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <TabBarExample />
            </div>
        );
    }
}
