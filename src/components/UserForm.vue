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

<style scoped>
.user-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.user-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.user-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.user-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.user-form input:focus {
  border-color: #4CAF50;
  outline: none;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
