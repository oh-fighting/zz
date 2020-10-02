import Mock from 'mockjs2'
import {
    builder,
    getQueryParameters
} from '../util'

// 搜索轮播文字
const swiperTextData = (options) => {
    const result = ["英短", "金渐层", "美短"]

    return builder({
        data: result
    })
}

// 获取热搜列表
const hotSearchList = (options) => {
    const result = [{
            text: "金渐层10元一个",
            count: 66000
        },
        {
            text: "二哈拆家",
            count: 60000
        },
        {
            text: "猫咪随处大小便怎么办",
            count: 52000
        },
        {
            text: "豹猫为什么那么贵",
            count: 32000
        },
        {
            text: "猫咪怀孕了应该吃什么",
            count: 31000
        },
        {
            text: "猫咪一定要阉割吗",
            count: 2100
        },
        {
            text: "如何给猫咪剪指甲",
            count: 600
        },
        {
            text: "二哈拆家",
            count: 60000
        },
        {
            text: "猫咪随处大小便怎么办",
            count: 52000
        },
    ]

    return builder({
        data: result
    })
}

Mock.mock(/\/search\/swiperTextData/, 'get', swiperTextData) // 搜索轮播文字
Mock.mock(/\/search\/hotSearchList/, 'get', hotSearchList) // 获取热搜列表