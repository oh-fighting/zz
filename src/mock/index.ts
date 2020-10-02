/*
 * @Author: your name
 * @Date: 2020-10-02 00:56:03
 * @LastEditTime: 2020-10-02 01:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zz\src\mock\index.ts
 */
import { isIE } from '@src/utils/common';

// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production') {

  if (isIE()) {
    console.error('[antd-pro] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.')
  }
  // 使用同步加载依赖
  const Mock = require('mockjs2')
  require('./services/index')  // 首页
  require('./services/search')  // 搜索页
  Mock.setup({
    timeout: 800 // setter delay time
  })
}
