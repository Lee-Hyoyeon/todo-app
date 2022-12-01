import React from 'react';
import { FcReddit } from 'react-icons/fc';
import { BiSquare } from '@react-icons/all-files/bi/BiSquare';
import { AiOutlineCheckSquare } from '@react-icons/all-files/ai/AiOutlineCheckSquare';
import styled from 'styled-components';
import './TodoListItem.css';
import cn from 'classnames';

const TodoListItemContainer = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background: skyblue;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        // 아이콘
        font-size: 1.5rem;
    }
    .text {
        margin-left: 0.5rem;
        flex: 1;
    }
    // 체크되었을 때 보여줄 스타일
    &.checked {
        svg {
            color: red;
        }
        .text {
            color: #adb5bd;
            text-decoration: line-through;
        }
    }
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #fff6b6;
    cursor: pointer;

    &:hover {
        color: hotpink;
    }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <TodoListItemContainer>
            <Checkbox
                className={cn('checkbox', { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <AiOutlineCheckSquare /> : <BiSquare />}
                <div className="text">{text}</div>
                {id}
            </Checkbox>
            <Remove onClick={() => onRemove(id)}>
                <FcReddit />
            </Remove>
        </TodoListItemContainer>
    );
};

export default TodoListItem;
