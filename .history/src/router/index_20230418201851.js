import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
// import child from '@/components/pages/child';
// import child2 from '@/components/pages/child2';
// import child3 from '@/components/pages/child3';
// import Menu from '@/components/pages/menu';


Vue.use(VueRouter);

export default new Router({
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
