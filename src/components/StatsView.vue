<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStores';
import { computed } from 'vue';

const todoStore = useTodoStore();

const totalTodos = computed(() => todoStore.todos.length);

const completeTodos = computed(() => todoStore.todos.filter(todo => todo.done).length);

const notCompletedTodos = computed(() => totalTodos.value - completeTodos.value);

const progress = computed(() => {
    return totalTodos.value > 0 ? (completeTodos.value / totalTodos.value) * 100 : 0;
});
</script>

<template>
    <div class="stats-container">
      <h2>📊 Statistiques des Tâches</h2>
  
      <p>Total des tâches : <strong>{{ totalTodos }}</strong></p>
      <p>Tâches complétées : <strong>{{ completeTodos }}</strong></p>
      <p>Tâches en cours : <strong>{{ notCompletedTodos }}</strong></p>
  
      <!-- Barre de progression -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
  
      <!-- Bouton retour -->
      <router-link to="/">
        <button>Retour à la To-Do List</button>
      </router-link>
    </div>
  </template>