export default{
    
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    redirect:"home/homeBody",
    meta:{
        flag:true
    },
    children:[
        {
            path:'homeBody',
            component:()=>import("components/homeBody"),
            name:"homeBody",
            meta:{
                flag:true
            },
        
        },

        {
            path:'quality',
            component:()=>import("components/quality"),
            name:"quality",
            meta:{
                flag:true
            },
        
        },
        {
            path:'homeInland',
            component:()=>import("components/homeInland"),
            name:"homeInland",
            meta:{
                flag:true
            },
        
        }

    ],


}