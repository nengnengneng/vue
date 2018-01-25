<template>
    <div class="details">
        <header class="heads">
            <p class="return" @click="backs">
                <img src="../../static/img/return1.png">
                <span>返回</span>
            </p>
            <p class="blan">
                <a href="javascript:;">商品</a>
                <a href="javascript:;">详情</a>
            </p>
            <p class="house"><img src="../../static/img/4.png"></p>
        </header>
        <div class="main">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../static/img/67ebc65a3e61b404a2954fca2574fe5d.jpg"></div>
                    <div class="swiper-slide"><img src="../../static/img/0bbc44e58c83a3eb8190913cc1b93937.jpg"></div>
                    <div class="swiper-slide"><img src="../../static/img/a1324f85faeab4bb134a74f5d9f1b1e4.jpg"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <p class="ptit">御龙源 北大荒酸菜棵500克×3袋 亲民有机酸菜棵 东北酸菜 笨酸菜  500g</p>
            <ul>
                <li>
                    <b>¥45.80</b>
                    <span class="count">68.00</span>
                    <span id="postage">(运费:¥0.00)</span>
                </li>
                <li>溯源查询</li>
            </ul>
            <div class="dl">
                <dl>
                    <dt><img src="../../static/img/f6f3b979be2e93597920369f52a3e52662cde6e0.jpg"></dt>
                    <dd>
                        <p class="bg">嫩江源食品专营店</p>
                        <p class="shopman">店主:<span>NJY1407004</span></p>
                    </dd>
                    <span class="spa">进入店铺</span>
                </dl>
            </div>
            <div class="grey"></div>
            <div class="hot">
                <p>
                    <img src="../../static/img/my16.png">
                    <img src="../../static/img/my17.png">
                    <span>热门推荐</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/swiper-3.3.1.min.js';
export default {
    name: 'details',
    mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination'
        })
    },
    methods: {
        backs () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang='scss'>
@import '../assets/swiper-3.3.1.min.css';
.details{
    flex:1;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .heads{
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;
        .return{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 30%;
                height: 30%;
            }
            span{
                font-size: 0.25rem;
            }
        }
        .blan{
            flex:3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.35rem;
            a{
                padding: 0rem 0.2rem;
            }
        }
        .house{
            flex:1;
            img{
                display: inline-block;
                border: solid 0.01rem #666;
                padding: 0.15rem;
                border-radius: 50%;
                width: 0.3rem;
                height: 0.3rem;
            }
        }
    }
    .main{
        flex:1;
        overflow-y: scroll;
        .swiper-container {
            img{
                width: 100%;
            }
        }
        .ptit{
            font-size: .26rem;
            border-top: 0.01rem solid #eeeeee;
            padding: 0.1rem 0.4rem;
            font-weight: inherit;
            color: #333;
            background: #fff;
        }
        ul{
            width: 100%;
            height: 1.8rem;
            position: relative;
            background: #fff;
            li:nth-child(1){
                width: 4.88rem;
                color: #999999;
                font-size: 0.16rem;
                background: #fff;
                margin-top: 0.1rem;
                line-height: 0.35rem;
                float: left;
                b{
                    color: #333;
                    font-weight: normal;
                    font-size: .24rem;
                    padding-left: 0.5rem;
                    margin-right: .09rem;
                }
                .count{
                    text-decoration: line-through;
                    font-size: .24rem;
                    color: #999999;
                }
                #postage{
                    display: block;
                    padding-left: 0.5rem;
                    font-size: 0.26rem;
                    color: #666;
                }
            }
            li:nth-child(2){
                width: 2rem;
                line-height: 0.82rem;
                text-align: center;
                background: #4f99f2;
                border-radius: 0.05rem;
                color: #fff;
                font-size: 0.28rem;
                margin-left: 0.3rem;
                float: left;
                margin-top: 0.1rem;
            }
        }
        .dl{
            dl{
                width: 100%;
                position: relative;
                dt{
                    img{
                        position: absolute;
                        left: .3rem;
                        top: .3rem;
                        width: .65rem;
                        height: .65rem;
                        vertical-align: top;
                        border: 0;
                    }
                }
                dd{
                    background: #fff;
                    margin-top: 0;
                    height: 1.2rem;
                    .bg{
                        color: #333333;
                        margin-left: 1.2rem;
                        font-size: .26rem;
                        padding-top: .2rem;
                        margin-bottom: 0.15rem;
                    }
                    .shopman{
                        margin-left: 1.2rem;
                        margin-top: .01rem;
                        font-size: .2rem;
                        color: #666666;
                    }
                }
                .spa{
                    width: 1.9rem;
                    line-height: .7rem;
                    text-align: center;
                    position: absolute;
                    right: .3rem;
                    top: .2rem;
                    border: 1px solid #666;
                    border-radius: 2px;
                    font-size: .28rem;
                    color: #333;
                }
            }
        }
        .grey{
            width: 100%;
            height: 0.1rem;
            background: #EEE;
        }
        .hot{
            width: 100%;
            margin-top: .1rem;
            background: #fff;
            overflow: hidden;
            p{
                width: 100%;
                height: .6rem;
                line-height: .6rem;
                text-align: center;
                background: #ffffff;
                position: relative;
                img{
                    width: 0.34rem;
                    height: 0.24rem;
                    vertical-align: top;
                    border: 0;
                }
                img:nth-child(1){
                    position: absolute;
                    top: 0.2rem;
                    left: 2.6rem;
                }
                img:nth-child(2){
                    position: absolute;
                    top: 0.2rem;
                    right: 2.5rem;
                }
                span{
                    font-size: 0.25rem;
                }
            }
        }
    }
}
</style>
