<template>
    <div class="shop">
        <dl  v-for="(x, i) in list" :key="i">
            <dt>
                <img :src="'http://www.lb717.com/'+x.obj_data" @click="go_details" alt='大白菜'>
            </dt>
            <dd>
                <p>{{x.goods_name}}</p>
                <p>
                    <b>¥{{x.discount_price}}</b>
                    <img @click.stop="addCart(x)" src="../../../static/img/homeland3.png">
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'shop',
    data () {
        return {
            list: []
        }
    },
    props: ['id'],
    created (){
        this.queryGoodsList();
    },
    watch: {
        id (n) {
            this.queryGoodsList()
        }
    },
    methods: {
        queryGoodsList: function(){
            this.$http.post('/mall/index/getGoodsChannel', {
                channel_id: this.id
            }).then(res=>{
                var data = JSON.parse(JSON.stringify(res.data));
                if(data.data.data.length){
                    this.list.push(...data.data.data);
                }else{
                    this.$emit('stop');
                    alert('别拽啦，我到底了');
                }
            })
        },
        go_details () {
            this.$router.push({name: 'details'})
        },
        ...mapMutations(['addCart'])
    }
}
</script>

<style scoped lang='scss'>
.shop{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    dl{
        width: 49%;
        display: flex;
        flex-direction: column;
        dt{
            width: 100%;
            img{
                width: 95%;
            }
        }
        dd{
            width: 100%;
            p:nth-child(1){
                font-size: 0.2rem;
                line-height: 0.3rem;
                height: 0.6rem;
                overflow: hidden;
            }
            p:nth-child(2){
                display: flex;
                justify-content: space-between;
                margin: 0.2rem 0rem;
                b{
                    font-size: 0.3rem;
                    color: red;
                    margin-left: 0.1rem;
                }
                img{
                    margin-right: 0.4rem;
                    width: 0.5rem;
                    height: 0.5rem;
                }
            }
        }
    }
}
</style>
