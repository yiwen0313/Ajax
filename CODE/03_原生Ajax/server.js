// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('HELLO  AJAX');
});

// 针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('HELLO IE');
});

// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应
        response.send('延时响应');
    }, 3000);
});

// app.post('/server', (request, response)=>{
// 可以接收任意类型的请求
app.all('/json-server', (request, response) => {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'gxy'
    };
    // 对对象进行字符串的转换
    let str = JSON.stringify(data);
    // 设置响应
    response.send(str);
});

app.all('/axios-server', (request, response) => {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {name: 'gxy'};
    response.send( JSON.stringify(data));
});

// 4.监听端口 启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000端口监听中...");
});
