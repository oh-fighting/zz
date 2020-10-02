import * as React from 'react';
// import PropTypes from 'prop-types';
import './search.less'

import { Carousel, WingBlank } from 'antd-mobile';


export interface IProps {
    showTextSwiper?: boolean,
    textSwiperData?: Array<string>,
    placeholder?: string,
    searchClick?: Function
}

export interface IState {
    foucesState: boolean,
    refTextInput: any,
}


export default class Search extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            foucesState: false,
            refTextInput: ''
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    renderTextSwiper(showState: boolean): any {
        // 当用户传入了placeholder也不能显示textSwiper
        if (showState && !!!this.props.placeholder && !this.state.foucesState) {
            return (
                <div className="my-swiper">
                    <WingBlank >
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            {
                                this.props.textSwiperData.map((item) =>
                                    <div className="v-item" key={item} onClick={this.clickSearch.bind(this)}>
                                        <p className="swiper-text">{item} </p>
                                    </div>
                                )
                            }
                        </Carousel>
                    </WingBlank>
                </div>
            )
        }
    }

    clickSearch() {
        this.setState({ foucesState: true })
        this.refTextInput.focus();
        this.props.searchClick && this.props.searchClick();
    }
    inputBlur() {
        this.setState({ foucesState: false })
    }
    public render() {
        const textSwiper = this.renderTextSwiper(this.props.showTextSwiper);
        return (
            <div className="search" onClick={this.clickSearch.bind(this)}>
                <i className="iconfont icon-search"></i>
                <input
                    className="input"
                    placeholder={this.props.placeholder}
                    ref={(input) => { this.refTextInput = input; }}
                    onBlur={this.inputBlur.bind(this)}
                >
                </input>
                {textSwiper}
            </div>
        );
    }
}








