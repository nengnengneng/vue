<template>
    <div class="login">
        <div class="heads">
            <p @click="back"><img src="../../static/img/return.png"></p>
            <p>会员登录</p>
            <p @click="toRegister">注册</p>
        </div>
        <div class="main">
            <div class="tel">
                <img src="../../static/img/number.png">
                <input type="text" placeholder="请输入您的手机号" v-model.trim="tell">
            </div>
            <div class="line"></div>
            <div class="psw">
                <img src="../../static/img/password.png">
                <input type="password" placeholder="请输入您的密码" v-model.trim="user_password">
            </div>
            <div class="btn" @click="go_to_login">立即登录</div>
            <div class="forget">忘记密码？</div>
        </div>
    </div>
</template>

<script>
import { setCookie } from '../utils/utils';
import { MessageBox } from 'mint-ui';
export default {
    name: 'login',
    data () {
        return {
            tell: '',
            user_password: ''
        }
    },
    methods: {
        go_to_login(){
            if (/^1[34578]\d{9}$/.test(this.tell)){
                this.$http.post('/admin/loginUser', {
                    tell: this.tell,
                    user_password: this.user_password
                }).then(({data})=>{
                    setTimeout(()=>{
                        if(data.code=='1'){
                            setCookie('token', data.token);
                            this.$router.push({name: 'mine'})
                        }else{
                            MessageBox('Notice', 'the message of login is wrong');
                        }
                        
                    },2000)
                })
            }else{
                alert('号码格式不对')
            }
        },
        toRegister () {
            this.$router.push({name: 'register'})
        },
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang='scss'>
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .heads{
        width: 100%;
        height: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3rem;
        }
        p:nth-child(1){
            img{
                width: 8%;
            }
        }
        p:nth-child(2){
            flex:3;
            font-size: 0.35rem;
        }
        p:nth-child(3){
            color: red;
        }
    }
    .main{
        flex:1;
        overflow-y: scroll;
        background: #F4F4F4;
        .tel{
            margin-top: 0.2rem;
        }
        .tel,.psw{
            width: 100%;
            height: 1.2rem;
            display: flex;
            align-items: center;
            background: #fff;
            img{
                width: 6%;
                margin-left: 0.5rem;
            }
            input{
                width: 90%;
                border:none;
                outline: none;
                font-size: 0.3rem;
                margin-left: 0.3rem;
            }
        }
        .line{
            width: 80%;
            height: 0.02rem;
            background: #ccc;
            margin-left: 12%;
        }
        .btn{
            width: 70%;
            height: 1rem;
            margin-left: 15%;
            background: #FC4141;
            border-radius: 0.5rem;
            font-size: 0.35rem;
            line-height: 1rem;
            text-align: center;
            color: #fff;
            margin-top: 1.1rem;
        }
        .forget{
            font-size: 0.25rem;
            margin-left: 70%;
            color: #999;
            margin-top: 0.2rem;
        }
    }
}
</style>
