/*
 * @Author: your name
 * @Date: 2020-10-02 00:56:03
 * @LastEditTime: 2020-10-02 01:15:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \zz\src\mock\services\index.js
 */
import Mock from 'mockjs2'
import {
    builder,
    getQueryParameters
} from '../util'
const totalCount = 5701

// 批准上市
const approvedListing = (options) => {
    const result = ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2108032947,475871746&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1321592062,4008367638&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600357050126&di=5c25f6c2cdc875f8b5be493ba05363a8&imgtype=0&src=http%3A%2F%2Fup.kukudesk.com%2Fpic_360%2F5a%2Ffe%2F8b%2F5afe8bb2ca3dd7e17de862b3041eb719.jpg'
    ]

    return builder({
        data: result
    })
}

// 基本信息
const baseInfo = (options) => {
    const parameters = getQueryParameters(options)
    const result = [{
        info: '没有进行定义'
    }]

    return builder({
        data: result
    })
}



Mock.mock(/\/fighting\/getSwiperImg/, 'get', approvedListing) //批准上市
Mock.mock(/\/fic-web-api\/newDrug\/arrpovedListing\/baseInfo/, 'get', baseInfo) //基本信息