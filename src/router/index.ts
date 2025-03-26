import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import NumberFilter from '@/components/NumberFilter.vue';
import StatsView from '@/components/StatsView.vue';
import UserForm from '@/components/UserForm.vue';
import UserList from '@/components/UserList.vue';

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
  },
  {
    path: '/user-form',  
    name: 'UserForm',
    component: UserForm, 
  },
  {
    path: '/user-list', 
    name: 'UserList',
    component: UserList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
