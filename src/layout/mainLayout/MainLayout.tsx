/*
 * @Author: atdow
 * @Date: 2020-09-14 23:12:08
 * @LastEditTime: 2020-09-14 23:40:55
 * @LastEditors: Please set LastEditors
 * @Description: 创建基础带tabbar的layout
 */


import * as React from 'react';
import TabBarExample from '@components/tabbar/tabbar.tsx';
import "./MainLayout.less"
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
        return (
            <div >
                7777
                <TabBarExample />
            </div>
        );
    }
}
