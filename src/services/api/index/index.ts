import axios from '@src/services/axios';

// 获取轮播图图片
export function getSwiperImg(parameter?: any) {
    return axios({
        url: '/getSwiperImg',
        method: 'get',
        params: parameter
    })
}