const express = require('express');
const bodyparser = require('body-parser');
const queryApi = require('./queryApi');
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');

app.use(bodyparser.json());

app.all('*', function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, token');
    res.header('Content-Type', 'application/json');
    next();
})

// 首页数据请求
app.post('/mall/index/getGoodsChannel', function(req, res){
    queryApi('/mall/index/getGoodsChannel', req.body, 'POST').then(data=>{
        res.end(data);
    })
})

// 注册页
app.post('/admin/registerUser', function(req, res){
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    var adminList = fs.readFileSync('../mock/adminList.json', {encoding: 'utf-8'});
    adminList = JSON.parse(adminList);
    adminList.list.push(req.body);
    fs.writeFileSync('../mock/adminList.json', JSON.stringify(adminList));
    var obj = {
        "code": 1,
        "msg": "SUCCESS"
    }
    res.end(JSON.stringify(obj));
})

// 登录页
app.post('/admin/loginUser', function(req, res){
    res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    var admin_list = JSON.parse(fs.readFileSync('../mock/adminList.json','utf-8'));
    var token,response,flag = false;
    admin_list.list.forEach((item)=>{
        if(item.tell==req.body.tell){
            flag=true;
            if(item.user_password==req.body.user_password){
                token = jwt.sign(req.body, '1508B', {expiresIn:60*30})
                response = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                };
            }else{
                response = {
                    "code": 2,
                    "error": 'error',
                    "msg": "密码错误"
                };
            }
        }
    })
    if(!flag){
        response = {
            "code": 3,
            "error": 'error',
            "msg": "此用户不存在"
        };
    }
    res.end(JSON.stringify(response));
})

app.listen('3000', function(){
    console.log('server listen 3000')
})