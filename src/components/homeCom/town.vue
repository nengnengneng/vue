<template>
    <div class="town">
        <div>
            <img src="../../../static/img/line.png">
            <img src="../../../static/img/homelandlogo.png">
            <b>家乡味道</b>
            <img src="../../../static/img/line.png">
        </div>
        <div><span>更多<img src="../../../static/img/homeland1.png" alt=""></span></div>
    </div>
</template>

<script>
export default {
    name: 'town'
}
</script>

<style lang='scss' scoped>
.town{
    width: 100%;
    height: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-child(1){
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 20%;
        }
        img:nth-child(1){
            margin-left: 0.8rem;
        }
        img:nth-child(2){
            width: 8%;
            margin-left: 0.2rem;
        }
        b{
            font-size: 0.3rem;
            color: #f5803f;
            margin: 0rem 0.15rem;
        }
    }
    div:nth-child(2){
        flex:1;
        span{
            font-size: 0.25rem;
            margin-left: 0.8rem;
            img{
                padding-left: 0.1rem;
            }
        }
    }
}
</style>
