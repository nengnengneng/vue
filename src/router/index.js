import Vue from 'vue';
import Router from 'vue-router';
import all from '../../src/all.vue';
import home from '../views/home.vue';
import sort from '../views/sort.vue';
import car from '../views/car.vue';
import mine from '../views/mine.vue';
import society from '../views/society.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import search from '../views/search.vue';
import details from '../views/details.vue';
import pay from '../views/pay.vue';
Vue.use(Router);
let router =  new Router({
    routes: [
        {
            path: '/',
            redirect: '/all'
        },
        {
            path: '/all',
            component: all,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    alias: '',
                    component: home
                },
                {
                    path: 'search',
                    name: 'search',
                    component: search
                },
                {
                    path: 'sort',
                    name: 'sort',
                    component: sort
                },
                {
                    path: 'car',
                    name: 'car',
                    component: car
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: mine
                },
                {
                    path: 'society',
                    name: 'society',
                    component: society
                },
                {
                    path: 'details',
                    name: 'details',
                    component: details
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/pay',
            name: 'pay',
            component: pay
        }
    ]
});
export default router;