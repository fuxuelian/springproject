export default{
     
    path:"/japen",
    component:()=>import("components/japen"),
    name:"japen",
    meta:{
        flag:false
    },
    redirect:"japen/spots",
    children:[
        {
            path:"spots",
            component:()=>import("components/spots"),
            name:"spots",

        },
        {
            path:"japenTWo",
            component:()=>import("components/japenTwo"),
            name:"japenTWo",
            
        },
        {
            path:"japenThree",
            component:()=>import("components/japenThree"),
            name:"japenThree",
            
        },
        {
            path:"japenfour",
            component:()=>import("components/japenfour"),
            name:"japenfour",
            
        },
        {
            path:"group",
            component:()=>import("components/group"),
            name:"group",
            
        },
        {
            path:"local",
            component:()=>import("components/local"),
            name:"local",
            
        },

    ]

    

}