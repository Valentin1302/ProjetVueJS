<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Vérification réactive de la route active
const isNumberFilter = computed(() => route.path === "/number-filter");
</script>

<template>
  <div>
    <!-- Afficher le bouton SEULEMENT si on N'EST PAS sur /number-filter -->
    <router-link v-if="!isNumberFilter" to="/number-filter">
      <button>Accès à l'algo</button>
    </router-link>

    <router-link v-if="route.path !== '/stats'" to="/stats">
      <button>📊 Voir les statistiques</button>
    </router-link>
    <!-- Ceci affichera le composant de la route active -->
    <router-view></router-view>
  </div>
</template>
