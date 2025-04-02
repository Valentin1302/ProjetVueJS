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


