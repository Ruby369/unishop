const BASE_URL = 'http://152.136.185.210:8000/api/w6'
export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url, //仅为示例，并非真实接口地址。
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        if (res.statusCode != 200) {
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