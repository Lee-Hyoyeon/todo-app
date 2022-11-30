import React from 'react';
import './TodoInsert.css';
import { IoIosAddCircleOutline } from 'react-icons/io';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할일 입력..." />
            <button type="submit">
                <IoIosAddCircleOutline />
            </button>
        </form>
    );
};

export default TodoInsert;
