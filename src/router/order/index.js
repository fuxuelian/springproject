export default{
    path:"/order",
    component:()=>import("views/order"),
    name:"order",
    
    redirect:"/order/remark",
    children:[
        {
            path:"remark",
            component:()=>import("components/remark"),
            name:"remark",
            meta:{
                flag:true
            },
        },
        {
            path:"shuffling",
            component:()=>import("components/shuffling"),
            name:"shuffling",
            meta:{
                flag:true
            },
        },
        {
            path:"official",
            component:()=>import("components/official"),
            name:"official",
            meta:{
                flag:true
            },
        }
    ]
}