<template>
    <div class="day">
        <div class="title">
            <div><img src="../../../static/img/todayimg.png" alt=""></div>
            <p>天天特惠<span>每天有惊喜</span></p>
            <span>更多<img src="../../../static/img/homeland1.png" alt=""></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'day'
}
</script>

<style scoped lang='scss'>
.day{
    background: #fff;
    padding: 0.2rem;
    .title {
        display: flex;
        align-items: center;
        div {
            flex: 1;
            img {
                display: block;
                width: 80%;
                height: auto;
            }
        }
        p {
            flex: 10;
            font-size: 0.35rem;
            color: #ff6d00;
            span{
                font-size: 0.25rem;
                display: inline-block;
                margin-left: 0.1rem;
            }
        }
        span{
            font-size: 0.25rem;
            margin-right: 0.1rem;
            img{
                padding-left: 0.1rem;
            }
        }
    }
}
</style>
