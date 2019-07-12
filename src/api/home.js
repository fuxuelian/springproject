//http://m.springtour.com/m/home/queryContent?cityId=211&positionId=99&t=201907071441&springsign=4E302810043FC0D63241AE589D11E9447356F0F5
import http from "../utils/http.js"

export const getHome = ()=>http("get","/m/home/queryContent?cityId=211&positionId=99&t=201907071441&springsign=4E302810043FC0D63241AE589D11E9447356F0F5")
export const getDetails = ()=>http("get","/m/home/queryContent?cityId=211&positionId=4219&t=201907081548&springsign=EF5E3E39211CF225F5C3AE29D56F637FAE387E65")
export const getLive = ()=>http("get","/m/queryContentForShop?cityId=211&positionId=3831&t=0&springsign=B3E5FEE9BDBFF7694A08AF3321C9C9AFA4CC1E97")
export const getLiveBox = ()=>http("get","/m/queryContentForShop?cityId=211&positionId=3834&t=0&springsign=8950E0AA718515CF8028BB94B765450DE79C73C4")
export const getlistbox = ()=>http("get","/m/home/queryContent?cityId=211&positionId=345&t=201907091414&springsign=70B0CA6A64601B49F1A823C30FE75329D5C0CB06")
export const getNight = ()=>http("get","/site/wednesday/queryproduct?id=77&springsign=2D8786A05AFD8FB106309631521A7A233D6724BA")

export const homeBanner = ()=>http("get","/m/home/queryContent?cityId=985&positionId=3605&t=201907090950&springsign=93661B89831DD612628DDA929A077E5ED86562A9")
export const liveDivision = ()=>http("get","/m/queryContentForShop?cityId=211&positionId=3928&t=0&springsign=416C7DA08C5EFC9C711CEF19BD1C08703C718D87")
export const getQuality = ()=>http("get","/m/home/queryContent?cityId=211&positionId=102&t=201907101014&springsign=AF72F5235451B0C8D6B253CDB57B63E2CAB5E3B5")
export const homeInland = ()=>http("get","/m/home/queryContent?cityId=211&positionId=104&t=201907101014&springsign=ADB117D2A98BB3F09740496EA258E203FD488916")
