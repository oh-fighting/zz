/*
 * @Author: your name
 * @Date: 2020-10-02 00:59:36
 * @LastEditTime: 2020-10-02 01:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zz\src\utils\common.ts
 */


export function isIE(): boolean {
    const bw = window.navigator.userAgent
    const compare = s => bw.indexOf(s) >= 0
    const ie11 = (() => 'ActiveXObject' in window)()
    return compare('MSIE') || ie11
}