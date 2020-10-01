/*
 * @Author: 曾泽
 * @Date: 2020-09-13 11:46:27
 * @LastEditTime: 2020-09-16 21:33:59
 * @LastEditors: Please set LastEditors
 * @Description: 修改一些错误警告以及代码规范
 */

import { TabBar } from 'antd-mobile';
import React from 'react';
import { withRouter } from 'react-router-dom'

export interface IProps {
}

export interface IState {
    selectedTab: string;
    hidden: boolean;
    fullScreen: boolean;
}

class TabBarExample extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        }
    }
    componentDidMount() {
        let pathname: string = this.props.history.location.pathname
        switch (pathname) {
            case '/main/home':
                this.setState({ selectedTab: 'home' });
                break;
            case '/main/friend':
                this.setState({ selectedTab: 'friend' });
                break;
            case '/main/my':
                this.setState({ selectedTab: 'my' });
                break;
        }
    }
    tabbarClick(path: string): void {
        this.props.history.push(path);
    }
    public render() {
        return (
            <div style={{ position: "fixed", bottom: "0", width: '100%' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selected={this.state.selectedTab === 'home'}
                        badge={1}
                        onPress={this.tabbarClick.bind(this, '/main/home')}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'friend'}
                        onPress={this.tabbarClick.bind(this, '/main/friend')}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                                }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={this.tabbarClick.bind(this)}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
                        }}
                        selectedIcon={{
                            uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
                        }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={this.tabbarClick.bind(this, '/main/my')}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(TabBarExample)






