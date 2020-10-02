import { TabBar } from 'antd-mobile';
import React from 'react';
import './tabbar.less'
import { withRouter } from 'react-router-dom'

export interface IProps {
}

export interface IState {
    selectedTab: string;
}

class TabBarExample extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: ''
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
            <div className="tabbar" >
                <ul>
                    <li className={this.state.selectedTab == 'home' ? "active" : ""} onClick={this.tabbarClick.bind(this, '/main/home')}>
                        <i className="iconfont icon-home"></i>
                        <p>首页</p>
                    </li>
                    <li className={this.state.selectedTab == 'friend' ? "active" : ""} onClick={this.tabbarClick.bind(this, '/main/friend')}>
                        <i className="iconfont icon-friend"></i>
                        <p>好友</p>
                    </li>
                    <li className={this.state.selectedTab == 'dynamic' ? "active" : ""}>
                        <i className="iconfont icon-dynamic"></i>
                        <p>动态</p>
                    </li>
                    <li className={this.state.selectedTab == 'my' ? "active" : ""} onClick={this.tabbarClick.bind(this, '/main/my')}>
                        <i className="iconfont icon-mine"></i>
                        <p>我的</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(TabBarExample)






