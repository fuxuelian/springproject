export default{
     
    path:"/ticket",
    component:()=>import("components/ticket"),
    name:"ticket",
    meta:{
        flag:false
    },

    children:[
        {
            path:"ticketpicOne",
            component:()=>import("components/ticketpicOne"),
            name:"ticketpicOne"
        },
        {
            path:"ticketpicTwo",
            component:()=>import("components/ticketpicTwo"),
            name:"ticketpicTwo"
        }
    ]
    

}