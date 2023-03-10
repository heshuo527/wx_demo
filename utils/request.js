/* 发送ajax请求 */
import config from '../utils/config'
export default (url, data, method = 'GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            data,
            method,
            success: res => {
                resolve(res.data)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}