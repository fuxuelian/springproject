// http://m.springtour.com/m/home/queryContent?cityId=985












// http://m.springtour.com/m/home/queryContent?cityId=211&positionId=4447&t=201907041643&springsign=08A5E0C0F1EFC2967E2B509061A9AE81BA091263


import http from "../utils/http.js";

export const getVip=()=>http("get","/m/home/queryContent?cityId=211&positionId=4447&t=201907041643&springsign=08A5E0C0F1EFC2967E2B509061A9AE81BA091263")
export const getAqy=()=>http("get","/m/home/queryContent?cityId=211&positionId=4452&t=201907051103&springsign=0F1A352861D2849258914C516CB1DA133FE979C4")
export const getTour=()=>http("get","/m/chargemember/queryContentForChargeMember?cityId=211&positionId=4524&t=0&springsign=A33C57170C83BCEFB65B6C07F38F88F3BB9027F0")

export const getHome=()=>http("get","/m/home/queryContent?cityId=211&positionId=99&t=201907071441&springsign=4E302810043FC0D63241AE589D11E9447356F0F5")