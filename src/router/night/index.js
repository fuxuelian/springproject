export default{
    path:'/night',
    component:()=>import("components/night"),
    name:"night",
    redirect:"/night/nightLeft",
    children:[
        {
            path:'nightLeft',
            component:()=>import("components/night/nightLeft"),
            name:"nightLeft",
        },
        {
            path:'nightRight',
            component:()=>import("components/night/nightRight"),
            name:"nightRight",

        }

    ],
    meta:{
        flag:false
    }
}