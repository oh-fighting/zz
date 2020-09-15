/*
 * @Author: atdow
 * @Date: 2020-09-14 23:12:08
 * @LastEditTime: 2020-09-15 23:30:18
 * @LastEditors: Please set LastEditors
 * @Description: 创建基础带tabbar的layout
 */


import * as React from 'react';
import TabBar from '@components/tabbar/tabbar.tsx';
import "./MainLayout.less"
import { renderAllRoutes } from '@routes/route-loader';
import { Switch, RouteComponentProps } from 'react-router-dom';
export interface IProps {
}

export interface IState {
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const routes = renderAllRoutes(this.props.routes);
        return (
            <div >
                <Switch>{routes}</Switch>
                <TabBar />
            </div>
        );
    }
}
