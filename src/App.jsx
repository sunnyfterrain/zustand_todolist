import { useEffect, useState } from 'react'

import TodoList from './components/ZustandTodoList'
import RecoilTodoList from './components/RecoilTodoList/TodoItemCreator'
import { todoListStore } from './recoilStore/todoAtoms'
import { useUserStore } from './zustandStore/useUserStore'
import { useRecoilValue } from 'recoil'

function App() {

  const user = useUserStore(state => state.user)
  const fetch = useUserStore(state => state.fetch)

useEffect(() => {
    fetch(2)
}, [fetch])

  const todoList = useRecoilValue(todoListStore)
  console.log('todolist', todoList);
  return (
    <div className="App">
      <TodoList/>
      <p>
        {user.name} <br/>
        {user.email}<br/>
        {user.phone}<br/>
        {user.website}<br/>
      </p>
      <RecoilTodoList/>
    </div>
  )
}

export default App
