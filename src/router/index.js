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
    },
    {
        path:'/login',
        name:'Login',
        component:() =>import('@/views/Login.vue'),
    },
    {
        path:'/register',
        name:'Register',
        component:()=>import('@/views/Register.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router ;