<template>
    <div class="car">
        <header class="heads">
            <span>购物车</span>
            <span>编辑</span>
        </header>
        <section class="main">
            <goods v-for="(v,ind) in cart" :key='ind' :item="v" :ind="ind"/>
        </section>
        <footer class="foots">
            <p><span :class="{'bgss': acInd}" @click="toggleFn"></span><b>全选</b></p>
            <p><b>合计:</b><span class="money">¥</span><span class="num">{{sumFn}}</span><b class="account" @click="go_to_pay">结算</b></p>
        </footer>
    </div>
</template>

<script>
// 加减按钮的操作
// 加减按钮联系前边的价格
// 同级组件传值：
// 三个：是否选中、价格、第几个
// 用splice操作数组,数组中都是消费的金额
import goods from '../components/carCom/goods.vue';
import { mapGetters,mapState } from 'vuex';
export default {
    name: 'car',
    data () {
        return {
            sum :0,
            acInd: false
        }
    },
    computed: {
        ...mapGetters(['sumFn']),
        ...mapState(['cart'])
    },
    components: {
        goods
    },
    methods: {
        Fn (num) {
            this.sum = num;
        },
        go_to_pay () {
            this.$router.push({name: 'pay'})
        },
        toggleFn () {
            this.acInd = !this.acInd;
        }
    }
}
</script>

<style scoped lang='scss'>
.car{
    flex:1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .heads{
        width: 100%;
        height: 1.1rem;
        border-bottom: solid 0.01rem #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.3rem;
        background: #FAFAFB;
        span{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        span:nth-child(1){
            flex:3;
            margin-left: 1rem;
            font-size: 0.35rem;
        }
        span:nth-child(2){
            flex:1;
        }
    }
    .main{
        flex:1;
        overflow-y: scroll;
    }
    .foots{
        width: 100%;
        height: 1rem;
        background: #FAFAFB;
        border-top: solid 0.01rem #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.3rem;
        p:nth-child(1){
            display: flex;
            span{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                border-radius: 50%;
                border: 1px solid #999;
                background: transparent;
                margin: 0rem 0.2rem;
            }
            .bgss{
                background: url(../../static/img/8.gif);
                border: none;
                background-size: 0.48rem;
            }
            b{
                color: #666666;
                margin-left: 0.16rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        p:nth-child(2){
            text-align: right;
            color: #666666;
            font-size: 0.4rem;
            b{
                font-size: 0.3rem;
                font-weight: inherit;
            }
            .money{
                color: #fd6565;
                padding: 0rem 0.1rem;
            }
            .num{
                color: #fc4141;
                font-weight: bold;
                padding-right: 0.2rem;
            }
            .account{
                display: inline-block;
                width: 2rem;
                height: 1rem;
                background: #fc4141;
                color: #fff;
                text-align: center;
                line-height: 1rem;
                letter-spacing: 0.1rem;
                font-size: 0.35rem;
            }
        }
    }
}
</style>
