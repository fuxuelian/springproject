import http from "../utils/http.js";
export const getCollect=()=>http("get","/m/home/queryContent?cityId=211&positionId=99&t=201907101307&springsign=B565DDC3BAE9BE06D68C28D113B787811DAC88D1")


// http://m.springtour.com/m/home/queryContent?cityId=211&positionId=99&t=201907101307&springsign=B565DDC3BAE9BE06D68C28D113B787811DAC88D1


export const getPic=()=>http("post","/m/find/queryFindArticle")
// /http://m.springtour.com/m/find/queryFindArticle
