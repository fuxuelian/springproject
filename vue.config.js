const path =require("path")

module.exports={
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"http://m.springtour.com",
                changeOrigin:true,
                pathRewrite:{
                    "/api":''
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api"),
                "utils":path.resolve(__dirname,"./src/utils"),
            }
            
        }
    }
}