import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;
