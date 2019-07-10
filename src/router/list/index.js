export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
<<<<<<< HEAD
    meta:{
        headerFlag:false
    }
=======
    redirect:"/list/bottomList",
    children:[
        {
            path:"rightList",
            component:()=>import("components/rightList"),
            name:"rightList"

        },
        {
            path:"bottomList",
            component:()=>import("components/bottomList"),
            name:"bottomList"

        },
    ]
>>>>>>> zhangbaoyin
}