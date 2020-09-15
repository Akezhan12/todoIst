import React, {FC, useCallback, useState} from "react";

import { Props } from './props';

export const AddTask: FC<Props> = ({ onAddTask }: Props) => {
    const [inputValue, setInputValue] = useState('');
    const onChangeInputValue = useCallback((e) => setInputValue(e.target.value), []);
    const onClickButton = useCallback(() => {
        if (inputValue.length > 0) {
            onAddTask(inputValue);
        }
        setInputValue('');
    }, [inputValue, onAddTask]);
    return (
        <div className="d-flex align-item-center">
            <input className="form-control mr-2" type="text" onChange={onChangeInputValue} value={inputValue} />
            <button className="btn btn-primary" onClick={onClickButton}>Add task</button>
        </div>
    )
}