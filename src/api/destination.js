

import http from "../utils/http.js"


export const destination = ()=>http("get","/api/m/home/queryPositionContents?cityId=211&positionId=905&t=201907081538&springsign=5FB2ED0B36B03F9624AE876ECDD694E9E368927B");


export const lunbo = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3605&t=201907090950&springsign=93661B89831DD612628DDA929A077E5ED86562A9")

export const remark = ()=>http("post","/api/m/find/queryFindArticle")


export const shuffling = ()=>http("post","/api/m/find/queryFindArticle")


export const official = ()=>http("post","/api/m/find/queryFindArticle")

export const ticket = ()=>http("get","/api/m/home/queryContent?cityId=211&positionId=328&t=201907100923&springsign=2E729166E6324F2D48AAEC2D4C9052653A54CC76")


export const ticketTrip = ()=>http("get","/api/m/home/queryPosition?cityId=211&positionId=3392&t=201907101207&springsign=F3D9DF5BEC67C21EF48F7A5A0F30D5968DAACCB8")


export const ticketpicOne = ()=>http("get","/api/m/home/queryContent?cityId=211&positionId=3808&t=201907100923&springsign=213116AF5E5A78C4F050687E6F5F0E06533061F5")


export const ticketpicTwo = ()=>http("get","/api/m/home/queryContent?cityId=211&positionId=3809&t=201907101420&springsign=EA8A6591013AEE00F9BFBC9D0D6E1213AC5F6B10")


export const spots = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3281&t=201907101558&springsign=F9BC937959FA4B9F7B1A2EF87FB51C6235D8CB67")


export const japenTWo = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3279&t=201907061512&springsign=92843B38AA97337718EAF4A6460643111E0ADAEF")


export const japenThree = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3280&t=201907101700&springsign=4865D1BC0A9AE255E4DF9F2E81835A621AB65AE2")

export const japenfour = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3682&t=201907101700&springsign=9DBF4BD1FDDDB74DD160ACFC0119273FE691D038")



export const recommend = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3345&t=201907102151&springsign=603BAD6074DBA71F5B743FC6F60DE1D9B9863DAC")


export const group = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3348&t=201907061851&springsign=BDB0919BBC12BA1B1C95223CCB91FD91FA1AFE0A")


export const local = ()=>http("get","/api/m/home/queryContent?cityId=985&positionId=3717&t=201907061851&springsign=5E06E5D15EDE14EDA97B4A85F52FDB35B125D5FA")




