<template>
    <div class="heads">
        <p>
            <img src="../../../static/img/serach.png">
            <input type="text" placeholder="请输入您要购买的商品">
        </p>
    </div>
</template>

<script>
export default {
    name: 'heads'
}
</script>

<style scoped lang='scss'>
.heads{
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        width: 80%;
        height: 0.7rem;
        background: #f5f5f5;
        display: flex;
        border-radius: 0.15rem;
        img{
            margin-top: 0.15rem;
            height: 0.4rem;
            padding: 0rem 0.2rem;
            margin-left: 0.5rem;
        }
        input{
            width: 100%;
            height: 0.7rem;
            background: #f5f5f5;
            outline: none;
            border: none;
            font-size: 0.3rem;
            border-radius: 0.15rem;
        }
    }
}
</style>
