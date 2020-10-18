import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';

export default withRouter(
    class Login extends React.Component {
        constructor(props) {
            super(props);

            this.state = {};
        }

        render() {
            return <div className="login">快速登录</div>;
        }
    },
);
