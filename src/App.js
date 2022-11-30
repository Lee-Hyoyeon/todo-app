import './App.css';
import React from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoListItem from './Components/TodoListItem';
import TodoList from './Components/TodoList';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
            {/* <TodoListItem /> */}
        </TodoTemplate>
    );
};

export default App;
