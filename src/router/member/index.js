export default {
  path: "/member",
  component: () => import("components/member"),
  name: "member",
  redirect: 'member/enjoy' ,   
  meta: {
    title: "会员",
    headerFlag: true
  },
  children: [
    {
        path: "enjoy",
        component: () => import("components/enjoy"),
        name: "enjoy",
         
        meta: {
         
          headerFlag: true
        },
       
      },

    {
      path: "leave",
      component: () => import("components/leave"),
      name: "leave",
      meta: {
         
        headerFlag: true
      },
    },
    {
      path: "circum",
      component: () => import("components/circum"),
      name: "circum",
      meta: {
         
        headerFlag: true
      },
    },
    {
      path: "together",
      component: () => import("components/together"),
      name: "together",
      meta: {
         
        headerFlag: true
      },
    }
    
  ]
};
