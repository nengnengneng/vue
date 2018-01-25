<template>
    <div class="foot">
        <dl v-for="(v, i) in one" :key="i">
            <dt><img :src="v.pic"></dt>
            <dd><router-link :to="{name: v.name}">{{v.word}}</router-link></dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'foot',
    data () {
        return {
            one: [
                {
                    word: '首页',
                    pic: '../../static/img/4.png',
                    name: 'home'
                },
                {
                    word: '分类',
                    pic: '../../static/img/2.png',
                    name: 'sort'
                },
                {
                    word: '社区',
                    pic: '../../static/img/4.png',
                    name: 'society'
                },
                {
                    word: '购物车',
                    pic: '../../static/img/3.png',
                    name: 'car'
                },
                {
                    word: '我的',
                    pic: '../../static/img/1.png',
                    name: 'login'
                }
            ]
        }
    }
}
</script>

<style scoped lang='scss'>
.foot{
    width: 100%;
    height: 1.3rem;
    display: flex;
    border-top: solid 0.01rem #ccc;
    dl{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        dt{
            img{
                width: 0.5rem;
                height: 0.5rem;
            }
        }
        dd{
            font-size: 0.3rem;
            margin-top: 0.1rem;
        }
    }
}
</style>
