import Helloworld from '@/Components/HelloWorld.vue'
import SecondPage from '@/Views/SecondPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Helloworld
    },
    {
      path: '/SecondPage', 
      component: SecondPage
    }
  ],
})

export default router
