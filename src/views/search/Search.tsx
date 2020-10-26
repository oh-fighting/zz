import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '@src/components/search/Search';
import './search.less';
import { getSwiperTextData, getHotSearchList } from '@src/services/api/search';

export interface IProps {}

export interface IState {
    textSwiperData: Array<string>;
    hotSearchList: Array<any>;
}

class SearchPage extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            textSwiperData: [' ', ' '],
            hotSearchList: [],
        };
    }
    componentDidMount() {
        getSwiperTextData().then(res => {
            if (res.data.code == 200) {
                this.setState({ textSwiperData: res.data.data.data });
            }
        });
        getHotSearchList().then(res => {
            if (res.data.code == 200) {
                this.setState({ hotSearchList: res.data.data.data });
                console.log('res.data.data.data :', res.data.data.data);
            }
        });
    }
    cancel() {
        // console.log("test");
        this.props.history.goBack();
    }
    public render() {
        return (
            <div className="searchPage">
                <div className="header">
                    <Search showTextSwiper={true} textSwiperData={this.state.textSwiperData} />
                    <span className="cancel" onClick={this.cancel.bind(this)}>
                        取消
                    </span>
                </div>
                <div className="hotSearch">
                    <p className="title">
                        <i className="iconfont icon-fire"></i>
                        <span>热搜榜</span>
                    </p>
                    <ul
                        className={[
                            'hotList',
                            this.state.hotSearchList.length == 0 ? 'no-height' : '',
                        ].join(' ')}
                    >
                        {this.state.hotSearchList.map((item, index) => (
                            <li className="list" key={index}>
                                <span
                                    className={
                                        index == 0
                                            ? 'color-red'
                                            : index == 1
                                            ? 'color-brown'
                                            : index == 2
                                            ? 'color-gold'
                                            : ''
                                    }
                                >
                                    {index + 1}
                                </span>
                                <span>{item.text}</span>
                                <span>{item.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchPage);
