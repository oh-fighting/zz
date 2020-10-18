import * as React from 'react';
import './my.less';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MyMessage from './my-message/index';
import MyApply from './my-apply';

export interface IProps {}

export interface IState {}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <>
                <div className="myPage">
                    <MyMessage _this={this.props} />
                </div>
                <MyApply />
            </>
        );
    }
}
