<template>
    <div class="goods">
        <div class="left">
            <span class="bgsa" :class="{'bgss': acInd}" @click="toggleFn"></span>
        </div>
        <div class="mid">
            <img :src="`http://www.lb717.com/${item.obj_data}`">
        </div>
        <div class="right">
            <p class="bgsb">
                <span class="cancel" @click="changeCount(false)">-</span>
                <span class="num">{{count}}</span>
                <span class="add" @click="changeCount(true)">+</span>
            </p>
            <div class="inside">
                <p>{{item.goods_name}}</p>
                <p><b class="bgb"></b><span class="count">{{count}}</span></p>
                <p><b class="bgb2"></b><span class="counts">{{item.discount_price}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'goods',
    props: ['ind', 'item'],
    data () {
        return {
            count: this.item.follow_num,
            acInd: false
        }
    },
    methods: {
        changeCount (bool) {
            if (bool) {
                this.count+=1;
            } else {
                this.count-=1;
            }
            this.count = Math.min(10, Math.max(this.count, 1));
            this.busFn();
        },
        toggleFn () {
            this.acInd = !this.acInd;
            this.busFn();
        },
        busFn () {
            let num = 0;
            if (this.acInd) {
                num = this.item.discount_price*this.count;
            }
            this.changeArr({ind: this.ind, price: num});
        },
        ...mapMutations(['changeArr'])
    }
}
</script>

<style scoped lang='scss'>
.goods{
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    background: #fff;
    margin-bottom: .2rem;
    border-bottom: solid 0.01rem #ccc;
    position: relative;
    .left{
        flex: 0.5;
        .bgss{
            background: url(../../../static/img/8.gif);
            border: none;
            background-size: 0.48rem;
        }
        .bgsa{
            display: inline-block;
            position: absolute;
            left: 0.2rem;
            top: 1.06rem;
            width: 0.48rem;
            height: 0.48rem;
            border-radius: 50%;
            border: 1px solid #ccc;
        }
    }
    .mid{
        flex:1;
        img{
            width: 90%;
            height: 80%;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding-top: 0.2rem;
        }
    }
    .right{
        flex:2;
        .bgsb{
            position: absolute;
            width: 2rem;
            height: 0.6rem;
            top: 1.4rem;
            right: 0.3rem;
            font-weight: 300;
            border: 0.01rem solid #d8d8d8;
            border-radius: 0.02rem;
            display: -webkit-flex;
            span{
                text-align: center;
                line-height: .6rem;
            }
            span:nth-child(1){
                width: 30%;
                color: #333333;
                font-size: .5rem;
                border-right: 1px solid #d8d8d8;
            }
            span:nth-child(2){
                font-size: .36rem;
                width: 40%;
                color: #333333;
                line-height: .62rem;
                border-right: 1px solid #d8d8d8;
            }
            span:nth-child(3){
                width: 30%;
                color: #333333;
                font-size: .45rem;
            }
        }
        .inside{
            font-size: .26rem;
            margin-top: .32rem;
            float: left;
            margin-left: .2rem;
            p:nth-child(1){
                width: 4.2rem;
                height: .6rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .3rem;
                color: #666666;
            }
            p:nth-child(2){
                position: absolute;
                bottom: 0.85rem;
                .bgb{
                    width: 0.2rem;
                    height: 0.2rem;
                    display: inline-block;
                    background: url(../../../static/img/3.gif)no-repeat;
                    background-size: 0.2rem;
                }
            }
            p:nth-child(3){
                position: absolute;
                bottom: 0.46rem;
                .bgb2{
                    width: 0.2rem;
                    height: 0.25rem;
                    display: inline-block;
                    background: url(../../../static/img/2.gif)no-repeat;
                    background-size: 0.2rem 0.25rem;
                }
                .counts{
                    font-size: 0.3rem;
                    margin-left: 2px;
                    color: #fc4141;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
