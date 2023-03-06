import { atom } from "recoil";

export const todoListStore = atom({
    key: 'todoListState',
    default: [],
});