export default{
    path:"/list",
    component:()=>import("views/list"),
    name:"list",
    meta:{
        headerFlag:false,
        flag:true
    },

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
}