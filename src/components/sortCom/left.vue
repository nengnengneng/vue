<template>
    <div class="left">
        <ul>
            <li
                v-for="(v, i) in listData"
                :key='i'
                :class="{ac: acInd === i}"
                @click="listFn(i)"
            >{{v}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'left',
    data () {
        return {
            listData: ['家乡味道', '进口食品', '牛奶乳品', '休闲零食', '生鲜果蔬', '米面粮油', '调味调料', '酒水饮料'],
            acInd: 0
        }
    },
    methods: {
        listFn (ind) {
            this.acInd = ind
        }
    }
}
</script>

<style scoped lang='scss'>
.left{
    width: 2rem;
    height: 100%;
    background: #F0ECED;
    position: absolute;
    top: 0;
    left: 0;
    color: #333;
    ul{
        width: 100%;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 1rem;
            font-size: 0.3rem;
        }
    }
}
.ac{
    background: #fff;
    color: red;
}
</style>
