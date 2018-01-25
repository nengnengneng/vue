<template>
    <div class="sort">
        <heads/>
        <div class="main">
            <left/>
        </div>
    </div>
</template>

<script>
import heads from '../components/sortCom/heads.vue';
import left from '../components/sortCom/left.vue';
export default {
    name: 'sort',
    components: {
        heads,
        left
    }
}
</script>

<style scoped lang='scss'>
.sort{
    flex:1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
        overflow-y: scroll;
        position: relative;
        border-top: solid 0.01rem #ccc;
    }
}
</style>
