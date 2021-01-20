import './TodoApp.css';
import Form from './Form/Form'
import List from './List/List'
import React, { useState } from 'react'
import TodoItem from '../domain/TodoItem'
import todoService from "../service/TodoService";

const TodoApp = () => {
    const [todo, updateTodoValue] = useState(new TodoItem());
    const updateTodoHandler = (e) => updateTodoValue(prev => {
        const copy = Object.assign(new TodoItem(), prev);
        copy.value = e.target.value;
        return copy;
    });

    const [todoList, updateTodoList] = useState([]);

    const submitForm = () => {
        todoService.create(todo);
        updateTodoValue(new TodoItem());
    };

    return (
      <>
        <Form
          entity={todo}
          updateInputHandler={updateTodoHandler}
          submitForm={submitForm}
        />
        <List />
      </>
    );
}

export default TodoApp;