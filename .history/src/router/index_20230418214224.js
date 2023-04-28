import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '@/components/helloworld';
import Login from '@/components/pages/login';



Vue.use(VueRouter);

export default new vueRouter({
    routes: [
        {
            name:'首頁',
            path:'/',
            component: Home,
        },
        {
            name:'Login',
            path:'/login',
            component: Login,
        },
    ],
});
