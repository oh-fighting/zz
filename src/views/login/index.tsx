import * as React from 'react';
import './index.less';
import { tabs } from './const';

import { NavBar, Icon, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Login from './login-thirdparty';

export interface IStat {
    initialPage: number;
    tabsNumber: number;
}

export default class MyLogin extends React.Component<any, IStat> {
    constructor(props: any) {
        super(props);

        this.state = {
            initialPage: 0,
            tabsNumber: 0,
        };
    }
    goBack() {
        this.props.history.goBack();
    }
    onTabClick(tab, index) {
        this.setState({
            tabsNumber: index,
        });
    }
    render() {
        const isLogin = Boolean(this.state.tabsNumber);
        return (
            <div className="my-login">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goBack.bind(this)} />}
                ></NavBar>

                <Tabs
                    tabs={tabs}
                    initialPage={this.state.initialPage}
                    onTabClick={this.onTabClick.bind(this)}
                    tabBarActiveTextColor="#FFD85D"
                    tabBarInactiveTextColor="#999999"
                    tabBarUnderlineStyle={true}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            backgroundColor: '#fff',
                        }}
                    >
                        {isLogin ? '账号密码登录' : <Login />}
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}
