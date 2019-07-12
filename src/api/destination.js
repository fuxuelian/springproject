
//http://m.springtour.com/m/home/queryPositionContents?cityId=211&positionId=905&t=201907081538&springsign=5FB2ED0B36B03F9624AE876ECDD694E9E368927B

import http from "../utils/http.js"


export const destination = ()=>http("get","/m/home/queryPositionContents?cityId=211&positionId=905&t=201907081538&springsign=5FB2ED0B36B03F9624AE876ECDD694E9E368927B");

// http://m.springtour.com/m/home/queryContent?cityId=985&positionId=3605&t=201907090950&springsign=93661B89831DD612628DDA929A077E5ED86562A9

export const shuffling = ()=>http("get","/m/home/queryContent?cityId=985&positionId=3605&t=201907090950&springsign=93661B89831DD612628DDA929A077E5ED86562A9")

// http://m.springtour.com/m/find/queryFindArticle

export const remark = ()=>http("post","/m/find/queryFindArticle")










