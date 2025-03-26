<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStores';  
import { ref, computed} from 'vue';

const todoStore = useTodoStore();  // C'est ici que nous accédons à la liste des tâches et aux actions de gestion des tâches
const filter = ref('all');

const addTodo = () => { 
  const newTodoText = prompt('Que voulez-vous ajouter sur votre liste ?');
  if (newTodoText) {
    todoStore.addTodo(newTodoText);  
  }
};

const filteredTodos = computed(() => {
  if (filter.value === 'done') {
    return todoStore.todos.filter(todo => todo.done);
  } else if (filter.value === 'not-done') {
    return todoStore.todos.filter(todo => !todo.done);
  }
  return todoStore.todos; // Par défaut, toutes les tâches
});
</script>

<template>
  <div>
    <h2>Ma To-Do List</h2>

    <label for="filter">Filtrer :</label>
    <select id="filter" v-model="filter">
      <option value="all">Toutes les tâches</option>
      <option value="done">Tâches terminées</option>
      <option value="not-done">Tâches non terminées</option>
    </select>

    <ul>
       <li v-for="todo in filteredTodos" :key="todo.id">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="todoStore.toggleTodo(todo.id)">Toggle Done</button>
        <button @click="todoStore.removeTodo(todo.id)">Delete</button>
      </li>
    </ul>

    <button @click="addTodo">Ajouter une tâche</button>
    <div></div>
    <RouterView></RouterView>
  </div>
</template>

