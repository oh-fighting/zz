import axios from '@src/services/axios';

// 获取轮播图图片
export function getSwiperTextData(parameter?: any) {
    return axios({
        url: '/search/swiperTextData',
        method: 'get',
        params: parameter
    })
}

// 获取热搜列表
export function getHotSearchList(parameter?: any) {
    return axios({
        url: '/search/hotSearchList',
        method: 'get',
        params: parameter
    })
}