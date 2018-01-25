import Vue from 'vue';
import Vuex from 'vuex';
import { MessageBox } from 'mint-ui';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        tell: '',
        arr: [],
        cart: []
    },
    mutations: {po
        update_tell: function(state, data){
            state.tell = data
        },
        changeArr: function(state, { ind, price }){
            state.arr.splice(ind, 1, price);
        },
        resetArr: function(state, length){
            state.arr.length = length;
            state.arr.fill(0);
        },
        addCart: function(state, item){
            MessageBox('Notice', 'Added successfully!');
            let newArr = state.cart.filter(v => v.goods_id === item.goods_id);
            if (!newArr.length){
                item.follow_num = 1;
                state.cart.push(item)
            } else {
                newArr[0].follow_num = Number.parseInt(newArr[0].follow_num)+1;
            }
        } 
    },
    getters: {
        sumFn (state) {
            // return state.arr.reduce((v, n ) => v + n, 0);
            return (state.arr.reduce(function(v, n){
                return v + n
            }, 0)).toFixed(2)
        }
    }
})
export { store }