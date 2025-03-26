<script setup lang="ts">
import { useUserStore } from '@/stores/userStores';

const userStore = useUserStore();
</script>

<template>
  <div class="list-container"> 
    <h2>Liste des utilisateurs</h2>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
  <router-link to="/">
        <button>Retour à la To-Do List</button>
      </router-link>
</template>

<style scoped>
.list-container {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
