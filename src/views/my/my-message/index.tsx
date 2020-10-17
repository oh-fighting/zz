import * as React from 'react';
import './index.less';
import logo from '@src/assets/images/logo.png';

export interface IStat {
    isLogin: boolean;
    list: Array<any>;
}

export default class MyMessage extends React.Component<any, IStat> {
    constructor(props: any) {
        super(props);

        this.state = {
            isLogin: false, //登录状态
            list: [
                { number: 0, key: 1, text: '商品收藏' },
                { number: 0, key: 2, text: '店铺收藏' },
                { number: 0, key: 3, text: '我的足迹' },
                { number: 0, key: 4, text: '优惠卷' },
            ],
        };
    }
    login() {
        //登录
        console.log(this.props);
    }
    public render() {
        return (
            <div className="my-message">
                <div className="message-top">
                    <div className="message-logo">
                        <img className="message-img" src={logo} alt="头像" />
                        {this.state.isLogin ? (
                            <p>
                                <span>游客</span>
                            </p>
                        ) : (
                            <p className="message-loin">
                                <span onClick={this.login.bind(this)}>登录 </span>/
                                <span> 注册</span>
                            </p>
                        )}
                    </div>

                    <div className="message-icon">
                        <i className="iconfont icon-fire"></i>
                        <i className="iconfont icon-fire"></i>
                    </div>
                </div>

                <div className="my-apply">
                    <ul className="message-apply">
                        {this.state.list.map(item => {
                            return (
                                <li key={item.key}>
                                    <p className="li-number">{item.number}</p>
                                    <p className="li-name">{item.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
