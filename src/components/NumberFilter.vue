    <script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const numbers: number [] = Array.from({ length:10 }, (_, i) => i + 1);

    const getColor = (number: number): string => {
      return number %  2 === 0 ? 'green' : 'red';
    }
    const goBack = () => { 
      router.go(-1);
    };


    </script>

<template>
  <div>
    <h2>Algorithme - Number Filter</h2>
    <ul>
      <li v-for="number in numbers" :key="number" :style="{ color: getColor(number) }">
        {{ number }}
        </li>
    </ul>
    <!-- Bouton pour revenir à la page précédente -->
    <button @click="goBack">Revenir à la page d'accueil</button>
  </div>
</template>

