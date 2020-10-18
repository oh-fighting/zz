import * as React from 'react';
import './index.less';
import { APPLY_LIST } from '../const';

import { Grid } from 'antd-mobile';

export default class MyApply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div className="my-apply">
                <div className="apply-top">
                    <p className="apply-title">我的订单</p>
                    <p className="apply-more">{'查看更过→'}</p>
                </div>
                <div className="apply-content">
                    <ul>
                        {APPLY_LIST.map(item => {
                            return (
                                <li key={item.key}>
                                    <i className={item.icon}></i>
                                    <span>{item.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
