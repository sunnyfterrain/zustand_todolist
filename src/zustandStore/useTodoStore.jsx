import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


let todoStore = (set) => ({
                todos: [],
                addTodo: (todoText) => set((state) => ({ todos: [...state.todos, {id: state.todos.length, text: todoText, isCompleted: false}] })),
                deleteTodo: (todoId) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== todoId) })),
                completedTodo: (todoId) => set((state) => ({ todos: state.todos.map((todo) => (todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} : todo)) })),
                completeTodoAll: () => set((state) => ({ todos: state.todos.map((todo) => ({...todo, isCompleted: !todo.isCompleted})) })),
                deleteTodoAll: () => set((state) => ({ todos: [] }))
            });

// persist는 localStorage에 저장하는 기능을 제공한다.
todoStore = devtools(todoStore);
todoStore = persist(todoStore, {name: "todoStore", getStorage: () => sessionStorage}); // 안하면 기본은 localStorage

export const useTodoStore = create(todoStore);