const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url, //仅为示例，并非真实接口地址。
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        if (res.data.meta.status != 200) {
          return uni.showToast({
            title: '获取数据失败'
          });
        }
        resolve(res.data)
      },
      fail: (err) => {
        uni.showToast({
          title: '请求接口失败',
        });
        reject(err)
      }

    });
  })
}