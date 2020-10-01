import * as React from 'react';

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
            <div>
                friend
            </div>
        );
    }
}
