import React, {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListStore } from '../../recoilStore/todoAtoms';
import '../TodoList.css';

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListStore) // 아톰에서 가져옴

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const getId = () => {
        let id = 0;
        return id++;
    }
    // 아톰에 업데이트 해야함
    const addItem = (e) => {
        e.preventDefault();
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isCompleted: false
            }
        ])
        setInputValue('')
    }

  return (
    <div>
        <form onSubmit={addItem}>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button>Add</button>
        </form>
    </div>
  )
}

export default TodoItemCreator