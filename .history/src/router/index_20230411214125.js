import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/HelloWorld';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name:'首頁',
            path:'/',
            component: Home,
        },
        // {
        //     name:'首頁',
        //     path:'/',
        //     component: Home,
        // },
    ],
});