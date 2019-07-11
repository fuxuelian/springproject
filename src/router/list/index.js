export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
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
    ],

    meta:{
        flag:true
    }


}