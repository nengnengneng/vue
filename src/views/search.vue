<template>
    <div class="search">
        <div class="heads">
            <p>
                <img src="../../static/img/serach.png">
                <input type="text" placeholder="请输入您要购买的商品">
            </p>
            <p>搜索</p>
        </div>
        <div class="main">
            <p><span>最近搜索</span><img src="../../static/img/remo.png"></p>
            <p>暂无搜索记录……</p>
            <h1>大家都在搜</h1>
            <ul>
                <li>粽子</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search'
}
</script>

<style lang='scss' scoped>
.search{
    flex: 1;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    .heads{
        width: 100%;
        height: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(1){
            width: 80%;
            height: 0.8rem;
            border-radius: 0.1rem;
            background: #f5f5f5;
            img{
                width: 6%;
                margin-left: 0.2rem;
                margin-top: 0.2rem;
            }
            input {
                border: none;
                outline: none;
                background: transparent;
                margin-top: -0.3rem;
                margin-left: 0.2rem;
                font-size: 0.26rem;
            }
        }
        p:nth-child(2){
            font-size: 0.3rem;
            margin-left: 0.2rem;
        }
    }
    .main{
        flex: 1;
        overflow-y: scroll;
        p:nth-child(1){
            display: flex;
            justify-content: space-between;
            margin-top: 0.2rem;
            span{
                margin-left: 0.4rem;
                font-size: 0.3rem;
            }
            img{
                margin-right: 0.3rem;
            }
        }
        p:nth-child(2){
            margin-left: 0.5rem;
            font-size: 0.25rem;
            margin-top: 0.2rem;
        }
        h1{
            margin-top: 1rem;
            font-size: 0.33rem;
            margin-left: 0.4rem;
        }
        li{
            width: 0.5rem;
            margin-left: 0.4rem;
            border: solid 0.01rem #ccc;
            padding: 0.2rem 0.3rem;
            border-radius: 0.1rem;
            margin-top: 0.3rem;
            font-size: 0.25rem;
        }
    }
}
</style>
