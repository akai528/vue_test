import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name:'首頁',
            path:'/index',
            component: Home,
        },
        {
            name:'分頁',
            path:'/page',
            component: Page,
            children: [
                {
                    name:'卡片1',
                    path:'',
                    component: child,
                },
                {
                    name:'卡片2',
                    path:'child2',
                    component: child2,
                },
                {
                    name:'卡片3',
                    path:'child/:id',
                    component: child3,
                },
            ],
        },
    ],
});
