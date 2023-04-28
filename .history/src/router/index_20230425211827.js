import Vue from 'vue';
import VueRouter from 'vue-router';


// import Home from '@/components/helloworld';
import Login from '@/components/pages/login';
import Products from '@/components/pages/Products';



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            // name:'首頁',
            // path:'/',
            // component: Home,
        },
        {
            name:'Login',
            path:'/login',
            component: Login,
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
            ],
        },
    ],
});
