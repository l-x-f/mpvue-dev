import request from "../utils/request";
export default class IndexServer {
  // 获取活动列表
  static getList() {
    let url = `/shopping/restaurants`;
    return request({
      url: url,
      method: 'get',
      params: {
        latitude: '31.22967',
        longitude: '121.4762'
      }
    })
  }
};
