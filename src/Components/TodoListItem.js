import React from 'react';
import { FcReddit } from 'react-icons/fc';
import { BiSquare } from '@react-icons/all-files/bi/BiSquare';
import './TodoListItem.css';

const TodoListItem = () => {
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <BiSquare />
                <div className="text">할일</div>
            </div>
            <div className="remove">
                <FcReddit />
            </div>
        </div>
    );
};

export default TodoListItem;
