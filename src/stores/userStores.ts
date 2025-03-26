import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [] as { id: number; name: string; email: string }[],
  }),
  actions: {
    addUser(name: string, email: string) {
      this.users.push({
        id: Date.now(),
        name,
        email,
      });
    },
  },
});
