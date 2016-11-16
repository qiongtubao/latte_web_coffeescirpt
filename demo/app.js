var config = {
    port: 8080, //设置端口号
    staticWeb: {
        paths: {
            "/":"./html/" 
        }
    },
    cpus:1  //设置进程数  
}; //启动web服务器的配置
var Server = require("latte_webServer4"); //引入本库
var server = new Server(config); //创建服务器对象
process.latte = server;  //将服务器对象设为公用对象
server.web && server.web.addView("coffee", require("../"));
//设置静态文件中读取.md格式的文件都以markdown解析
server.staticWeb && server.staticWeb.addFilter("coffee", require("../"));
server.run();  //启动服务器
