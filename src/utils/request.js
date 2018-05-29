import Fly from "flyio/dist/npm/wx";
//添加请求拦截器https://github.com/wendux/fly/blob/master/README-CH.md interceptors
const fly = new Fly();
fly.interceptors.request.use(function (request) {
  //给所有请求添加自定义header
  // request.headers["X-Tag"]="flyio";
  //给所有请求添加自定义header
  request.baseURL = "http://cangdu.org:8001";
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  // return request;
})
export default fly;
