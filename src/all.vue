<template>
    <div class="all">
        <keep-alive include="home"><router-view></router-view></keep-alive>
        <foot/>
    </div>
</template>

<script>
import foot from './common/foot.vue';
export default {
    name: 'all',
    components: {
        foot
    }
}
</script>

<style scoped lang='scss'>
.all{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
