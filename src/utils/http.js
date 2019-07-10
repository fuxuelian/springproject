import axios from "axios";

<<<<<<< HEAD
const http =axios.create({
=======


const http = axios.create({
>>>>>>> zhangbaoyin
    timeout:5000,
    withCredentials:true
})

<<<<<<< HEAD
http.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data}
    }else if(config.method=="post"){
      config.headers["content.type"]="application/x-www-from-urlencoded";
    }
    return config
},(err)=>{
    return Promise.reject(err)
})

http.interceptors.response.use((res)=>{
if(res.status==200){
    return res.data
}

=======

// 请求时的拦截
http.interceptors.request.use((config)=>{
    if (config.method == "get") {
        config.params = {...config.data}
    } else if (config.method == "post") {
        config.headers = {"content-type":"application/x-www-form-urlencoded"}
    }

    return config;

},(err)=>{
    return Promise.reject(err);
})



// 响应拦截

http.interceptors.response.use((res)=>{
    if (res.status == 200) {
        return res.data;

    }
>>>>>>> zhangbaoyin
},(err)=>{
    return Promise.reject(err);
})

<<<<<<< HEAD
export default (method,url,data={})=>{
    if(method=="get"){
      return http.get(url,{
          params:data
      })
    }else if(method=="post"){
        return http.post(url,data);
=======

// 二次封装

export default (method,url,data={})=>{
    if (method == "get") {
        return http.get(url,{
            params:data
        })
    } else if (method == "post") {
        return http.post(url,data)
>>>>>>> zhangbaoyin
    }
}