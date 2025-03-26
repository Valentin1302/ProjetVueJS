import { defineStore } from 'pinia';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Définition du store 'todo'
export const useTodoStore = defineStore('todo', {
  state: () => ({
    // Liste des tâches
    todos: [] as Todo[],
    // Filtre pour afficher les tâches : 'all', 'active', 'done'
    filter: 'all' as 'all' | 'active' | 'done',
  }),

  actions: {
    // Ajouter une nouvelle tâche
    addTodo(text: string) {
      this.todos.push({ id: Date.now(), text, done: false });
    },
    // Toggle (changer) l'état de la tâche entre terminée ou non
    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id); // On cherche la tâche avec cet ID
      if (todo) todo.done = !todo.done; // Si la tâche existe, on inverse son état
    },
    // Supprimer une tâche de la liste
    removeTodo(id: number) {
      this.todos = this.todos.filter(t => t.id !== id); // On filtre la tâche à supprimer
    }
  }
});
