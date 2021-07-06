import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'sleep',
            status: 'new'
        },
        {
            id: 2,
            title: 'eat',
            status: 'completed'
        },
        {
            id: 3,
            title: 'code',
            status: 'completed'
        }
    ];
    const [Todo, setTodo] = useState(initTodoList)
    const HandleTodoClick = (todo, index) => {
       const newTodo = [...Todo]
       newTodo[index] = {
           ...newTodo[index],
           status: newTodo[index].status === 'new' ? 'completed' : 'new'
       }
       setTodo(newTodo);
       console.log(newTodo[index].status);
    }
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={initTodoList} onTodoClick={HandleTodoClick}/>
        </div>
    );
}

export default TodoFeature;