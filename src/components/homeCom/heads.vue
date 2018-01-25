<template>
    <div class="heads">
        <img src="../../../static/img/homelo.gif">
        <span>
            <i class="iconfont">&#xe729;</i>
            <input type="text" placeholder="请输入您要购买的商品" @click="searchFn">
        </span>
        <span>
            <img src="../../../static/img/shoping.png" alt="">
            <b>我的店铺</b>
        </span>
    </div>
</template>

<script>
export default {
    name: 'heads',
    methods: {
        searchFn () {
            this.$router.push({name: 'search'})
        }
    }
}
</script>

<style scoped lang='scss'>
.heads{
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        padding: 0rem 0.2rem;
    }
    img:nth-child(1){
        width: 15%;
    }
    span:nth-child(2){
        flex:3;
        display: flex;
        align-items: center;
        background: #f5f5f5;
        border-radius: 0.08rem;
        i {
            display: block;
            font-size: 0.3rem;
            font-weight: bold;
            margin-left: 0.2rem;
        }
        input {
            border: none;
            outline: none;
            background: transparent;
            padding: 0.2rem 0.1rem;
            font-size: 0.26rem;
        }
    }
    span:nth-child(3){
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 30%;
        }
        b{
            font-size: 0.2rem;
            display: inline-block;
            margin-top: 0.1rem;
        }
    }
}
</style>
