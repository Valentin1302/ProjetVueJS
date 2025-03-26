import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import NumberFilter from '@/components/NumberFilter.vue';
import StatsView from '@/components/StatsView.vue';

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: TodoList, 
  },
  {
    path: '/number-filter',
    name: 'NumberFilter',
    component: NumberFilter, 
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
