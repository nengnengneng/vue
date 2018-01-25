<template>
    <div class="lunbo">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../../static/img/banner1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/banner_activite.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/home.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/video.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../../static/img/video717.png" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    name: 'lunbo',
    Swipe,
    SwipeItem
}
</script>

<style scoped lang="scss">
.lunbo {
    height: 3.5rem;
    img {
        display: block;
        width: 100%;
        height: auto;
    }
}
</style>
