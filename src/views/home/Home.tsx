/*
 * @Author: 朱文栋
 * @Date: 2020-09-13 11:46:27
 * @LastEditTime: 2020-10-02 01:21:08
 * @LastEditors: Please set LastEditors
 * @Description: 修复代码警告和无用代码
 */

import styles from './home.module.less';
import React from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Carousel, WingBlank, Popover } from 'antd-mobile';
import { renderAllRoutes } from '@routes/route-loader';
import { Switch, RouteComponentProps } from 'react-router-dom';
import Tabbar from '@components/tabbar/tabbar.tsx';
import { getSwiperImg } from 'src/services/api/index/index'
import Search from '@src/components/search/Search'

function mapStateToProps(state) {
    return state;
}

interface RouterProps extends RouteComponentProps<any> { } //路由参数 Props 类型声明
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>; //映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
/**
 * 组件派发 action 集合的类型声明
 * type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;
 * 组件最终接收的所有 Props 类型声明
 */
type HomeProps = RouterProps &
    MapStateFromStoreProps & {
        routes?: any;
    };
class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            swiperImg: [],
            imgHeight: 176,
            visible: false,
            selected: '',
            textSwiperData: ["英短", "金渐层", "美短"]
        };
        localStorage.setItem('token', 'login');
    }
    componentDidMount() {
        getSwiperImg().then(res => {
            if (res.data.code == 200) {
                this.setState({ swiperImg: res.data.data.data })
            }
        }).catch(err => {
            // console.log("err:", err)
        })
    }
    goBack(): void {
        this.props.history.goBack();
    };
    onSelect = opt => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    searchClick() {
        this.props.history.push('/search');
    }
    renderSwiper() {
        if (this.state.swiperImg.length > 0) {
            return (
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => { }}
                        afterChange={index => { }}
                    >
                        {this.state.swiperImg.map(val => (
                            <img
                                src={`${val}`}
                                alt=""
                                key={val}
                                style={{ width: '100%', verticalAlign: 'top', touchAction: 'none' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                </WingBlank>
            )
        } else {
            return (<div className={styles.noSwiper}>图片加载中...</div>)
        }
    }
    render() {
        //const routes = renderAllRoutes(this.props.routes);
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search
                        showTextSwiper={true}
                        textSwiperData={this.state.textSwiperData}
                        searchClick={this.searchClick.bind(this)} />
                </div>
                {this.renderSwiper()}
            </div>
        );
    }
}

export default withRouter(Home)
