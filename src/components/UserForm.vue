<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStores';

const userStore = useUserStore();

// Variables réactives pour stocker l'entrée de l'utilisateur
const name = ref('');
const email = ref('');

const addUser = () => {
  if (name.value.trim() && email.value.trim()) {
    userStore.addUser(name.value, email.value);
    name.value = '';
    email.value = '';
  } else {
    alert("Veuillez remplir tous les champs !");
  }
};
</script>

<template>
  <div class="form-container">
    <h2>Ajouter un utilisateur</h2>
    <input v-model="name" type="text" placeholder="Nom" />
    <input v-model="email" type="email" placeholder="Email" />
    <button @click="addUser">Ajouter</button>
  </div>
  <router-link to="/">
        <button>Retour à la To-Do List</button>
   </router-link>
</template>
