import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path:'/',
        name:'Main' ,
        component :() =>import('@/views/Main.vue'),
        children:[
            {
                path:'',
                name:'Home',
                component:() =>import('@/views/Home.vue'),
                meta:{
                    title:'Home',
                },
            },
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router ;