<template>
    <div class="delicious">
        <div class="left"><img src="../../../static/img/home1.png"></div>
        <div class="right">
            <div class="top"><img src="../../../static/img/ruwei.png"></div>
            <div class="down"><img src="../../../static/img/gaodian.png"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'delicious'
}
</script>

<style scoped lang='scss'>
.delicious{
    display: flex;
    img{
        width: 100%;
        height: auto;
    }
    .left{
        flex:1;
    }
    .right{
        flex:1;
        display: flex;
        flex-direction: column;
    }
}
</style>
