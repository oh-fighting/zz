import Mock from 'mockjs2'
import {
    builder,
    getQueryParameters
} from '../util'

// 批准上市
const swiperImg = (options) => {
    const result = ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2108032947,475871746&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1321592062,4008367638&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600357050126&di=5c25f6c2cdc875f8b5be493ba05363a8&imgtype=0&src=http%3A%2F%2Fup.kukudesk.com%2Fpic_360%2F5a%2Ffe%2F8b%2F5afe8bb2ca3dd7e17de862b3041eb719.jpg'
    ]

    return builder({
        data: result
    })
}

Mock.mock(/\/fighting\/getSwiperImg/, 'get', swiperImg) //批准上市