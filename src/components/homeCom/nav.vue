<template>
    <ul class="navs">
        <li v-for="(item, key) in datas" :key="key">
            <img :src="item.pic" alt="">
            {{item.words}}
        </li>
    </ul>
</template>

<script>

export default {
    name: 'navs',
    data () {
        return {
            datas: [
                {
                    pic: '../../../static/img/nav1.png',
                    words: '牛奶乳品'
                },
                {
                    pic: '../../../static/img/nav2.png',
                    words: '家乡味道'
                },
                {
                    pic: '../../../static/img/nav3.png',
                    words: '休闲零食'
                },
                {
                    pic: '../../../static/img/nav4.png',
                    words: '米面粮油'
                },
                {
                    pic: '../../../static/img/nav5.png',
                    words: '调味调料'
                },
                {
                    pic: '../../../static/img/nav6.png',
                    words: '酒水饮料'
                },
                {
                    pic: '../../../static/img/nav7.png',
                    words: '生鲜果蔬'
                },
                {
                    pic: '../../../static/img/nav8.png',
                    words: '进口食品'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.navs{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    li {
        flex-basis: 25%;
        padding: 0.2rem 0;
        text-align: center;
        font-size: 0.26rem;
        color: #666;
        img {
            display: block;
            width: 50%;
            height: auto;
            margin: 0 auto 0.1rem;
        }
    }
}
</style>
