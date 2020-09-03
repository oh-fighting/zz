import styles from './register.module.scss';
import logo from '@assets/images/logo.svg';
import React from 'react';
import { RouteComponentProps } from 'react-router';
// import { connect } from 'react-redux';
import { RootState, RootDispatch } from '@src/store';
import { connect } from '@store/connect';

function mapStateToProps(state: RootState) {
    const {
        register: { count },
    } = state;
    return { count };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { register } = dispatch;
    return {
        incrementAsync: register.incrementAsync,
    };
}


type RouterProps = RouteComponentProps<any>; //路由参数 Props 类型声明
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;  //映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>; // 组件派发 action 集合的类型声明

//组件最终接收的所有 Props 类型声明
type RegisterProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
        count?: number;
    };

@connect(mapStateToProps, mapDispatchToProps)
export default class Register extends React.Component<RegisterProps> {
    handleLinkBtnClick = () => {
        this.props.history.push('/login');
    };
    handleAddBtnClick = () => {
        this.props.incrementAsync();
    };
    render() {
        const { count } = this.props;
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <p>This is Register Page </p>
                    <p className={styles.btn} onClick={this.handleLinkBtnClick}>
                        Go to the <span className={styles.pageName}>Login</span> Page
                    </p>
                    <p className={styles.btn} onClick={this.handleAddBtnClick}>
                        Async Add Btn
                    </p>
                    <p>count : {count}</p>
                </header>
            </div>
        );
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
