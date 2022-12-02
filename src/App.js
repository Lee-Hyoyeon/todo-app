import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoListItem from './Components/TodoListItem';
import TodoList from './Components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 기초알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '이야이야오',
            checked: false,
        },
        {
            id: 3,
            text: '루루리로리',
            checked: true,
        },
    ]);

    //고유값 id
    //ref를 사용하여 변수 담기
    const nextId = useRef(4);

    // function test(text){

    // }
    // const test = (text) =>{

    // }

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos],
    );

    //항목 제거
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
