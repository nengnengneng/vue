<template>
    <div class="register">
        <div class="heads">
            <p @click="back"><img src="../../static/img/return.png"></p>
            <p>注册会员</p>
            <p @click="toLogin">登录</p>
        </div>
        <div class="main">
            <div class="tel">
                <img src="../../static/img/number.png">
                <input type="text" v-model.trim="tell" placeholder="请输入您的手机号">
            </div>
            <div class="line"></div>
            <div class="vertification">
                <img src="../../static/img/code.png">
                <input type="text" placeholder="请输入验证码">
                <span>获取验证码</span>
            </div>
            <div class="line"></div>
            <div class="psw">
                <img src="../../static/img/password.png">
                <input type="password" v-model.trim="user_password" placeholder="请输入您的密码">
            </div>
            <div class="btn" @click="go_to_register">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            tell: '',
            user_password: ''
        }
    },
    methods: {
        go_to_register(){
            this.$http.post('/admin/registerUser', {
                tell: this.tell,
                user_password: this.user_password
            }).then(res=>{
                console.log(res)
                this.$router.push({name: 'login'})
            })
        },
        toLogin () {
            this.$router.push({name: 'login'})
        },
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang='scss'>
.register{
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
        .vertification{
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
                width: 50%;
                border:none;
                outline: none;
                font-size: 0.3rem;
                margin-left: 0.3rem;
            }
            span{
                width: 25%;
                height: 0.7rem;
                border: solid 0.01rem #FC4141;
                border-radius: 0.5rem;
                font-size: 0.25rem;
                line-height: 0.7rem;
                text-align: center;
                color: #FC4141;
            }
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
