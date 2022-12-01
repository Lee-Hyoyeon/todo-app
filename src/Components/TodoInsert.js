import React, { useCallback, useState } from 'react';
import './TodoInsert.css';
import { IoIosAddCircleOutline } from 'react-icons/io';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            //방지하기 위해 호출.
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할일 입력..."
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <IoIosAddCircleOutline />
            </button>
        </form>
    );
};

export default TodoInsert;
