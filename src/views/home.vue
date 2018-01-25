<template>
    <div class="home">
        <heads/>
        <div class="main" @scroll='scrollFn'>
            <div class="tall">
                <lunbo/>
                <navs/>
                <action/>
                <div class="grey"></div>
                <day/>
                <div class="grey"></div>
                <delicious/>
                <div class="grey"></div>
                <town/>
                <div class="grey"></div>
                <shop :id="channel_id" @stop="flag = false"/>
            </div>
        </div>
    </div>
</template>

<script>
import heads from '../components/homeCom/heads.vue';
import lunbo from '../components/homeCom/lunbo.vue';
import navs from '../components/homeCom/nav.vue';
import action from '../components/homeCom/action.vue';
import day from '../components/homeCom/day.vue';
import delicious from '../components/homeCom/delicious.vue';
import town from '../components/homeCom/town.vue';
import shop from '../components/homeCom/shop.vue';
export default {
    name: 'home',
    data () {
        return {
            channel_id: 2,
            flag: true
        }
    },
    methods: {
        scrollFn (e) {
            if (this.flag){
                let screenH = e.target.offsetHeight,
                    scrollH = e.target.scrollTop,
                    pageH = e.target.children[0].offsetHeight;
                if (pageH - (screenH + scrollH) < 5) {
                    this.channel_id += 1;
                }
            }
        }
    },
    components: {
        heads,
        lunbo,
        navs,
        action,
        day,
        delicious,
        town,
        shop
    }
}
</script>

<style scoped lang='scss'>
.home{
    flex:1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .main{
        flex:1;
        overflow-y: scroll;
        .grey{
            width: 100%;
            height: 0.15rem;
            background: #f5f5f5;
        }
    }
}
</style>
