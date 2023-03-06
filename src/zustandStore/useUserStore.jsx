import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let userStore = (set) => ({
    user: {},
    fetch: async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        set({user: data});
    }
});

export const useUserStore = create(userStore)