<template>
    <div class="pay">
        <header class="heads">
            <p @click="backs">
                <img src="../../static/img/return.png">
                <span>返回</span>
            </p>
            <p>订单支付</p>
            <p></p>
        </header>
        <div id="main">
            <div class="add">
                <img src="../../static/img/my19.png">
                <span>未添加地址，请点击添加地址</span>
                <img class="pic" src="../../static/img/homeland1.png">
            </div>
            <div class="line"><img src="../../static/img/6.gif"></div>
            <div class="surplus">
                <p>
                    <span>余额支付 ¥0.00</span>
                    <span><b></b></span>
                </p>
                <p>
                    <span>奖金支付 ¥0.00</span>
                    <span><b></b></span>
                </p>
                <div class="down">
                    <img src="../../static/img/home06.png">
                    <span>微信支付</span>
                    <b></b>
                </div>
                <div class="down">
                    <img src="../../static/img/home09.png">
                    <span>支付宝支付</span>
                    <b></b>
                </div>
                <div class="down">
                    <img src="../../static/img/home11.png">
                    <span>银联支付</span>
                    <b></b>
                </div>
            </div>
        </div>
        <footer class="foots">
            <div class="left">
                <p>总计:<b>¥0.00</b></p>
                <p>(含运费)</p>
            </div>
            <div class="mid"><p>定金:<b>¥0.00</b></p></div>
            <div class="right">提交订单</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'pay',
    methods: {
        backs () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang='scss'>
.pay{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .heads{
        width: 100%;
        height: 1rem;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
        p:nth-child(1){
            span{
                margin-left: 0.15rem;
            }
        }
        p{
            flex:1;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            font-size: 0.3rem;
        }
        p:nth-child(2){
            flex:3;
            font-size: 0.35rem;
        }
    }
    #main{
        width: 100%;
        overflow-y: scroll;
        -webkit-flex: 1;
        padding-bottom: 2.5rem;
        background: #eee;
        .add{
            width: 100%;
            height: 1.5rem;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                display: block;
                width: 0.3rem;
                height: auto;
                padding: 0rem 0.2rem;
            }
            .pic{
                width: 0.15rem;
                margin-right: 0.3rem;
            }
            span:nth-child(2){
                flex:3;
                font-size: 0.3rem;
            }
        }
        .line{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .surplus{
            width: 100%;
            p{
                width: 100%;
                height: 1.3rem;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: space-around;
                span:nth-child(1){
                    flex:2;
                    font-size: 0.3rem;
                    margin-left: 0.2rem;
                }
                span:nth-child(2){
                    display: inline-block;
                    width: 1.3rem;
                    height: 0.65rem;
                    border: solid 0.01rem #96D2A0;
                    border-radius: 0.4rem;
                    margin-right: 0.3rem;
                    position: relative;
                    b{
                        display: inline-block;
                        width: 0.65rem;
                        height: 0.65rem;
                        border-radius: 50%;
                        border: solid 0.01rem #ccc;
                    }
                }
            }
            .down{
                width: 100%;
                height: 1.3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                img{
                    margin-left: 0.3rem;
                    width: 1rem;
                    height: 1rem;
                }
                span{
                    flex:3;
                    display: flex;
                    align-items: center;
                    font-size: 0.3rem;
                    margin-left: 0.5rem;
                }
                b{
                    width: 0.6rem;
                    height: 0.6rem;
                    display: inline-block;
                    border-radius: 50%;
                    border: solid 0.01rem #ccc;
                    margin-right: 0.7rem;
                }
            }
        }
    }
    .foots{
        width: 100%;
        height: 1rem;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        font-size: 0.3rem;
        .left{
            flex:2;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p:nth-child(1){
                margin-bottom: 0.1rem;
                b{
                    color: red;
                }
            }
        }
        .mid{
            flex:1;
            b{
                color: red;
            }
        }
        .right{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: red;
            color: #fff;
            height: 100%;
        }
    }
}
</style>
