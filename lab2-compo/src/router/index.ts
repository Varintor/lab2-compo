import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EvenListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentView from '@/views/StudentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView,
    },{
      path: '/students',
      name: 'students',
      component: StudentView,
    },
  ],
})

export default router
