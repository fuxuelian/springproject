export default{
    path:"/order-details/:id",
    component:()=>import("components/order-details"),
    name:"orderDetails",
    props:true,
    meta:{
        flag:false
    }

}