import React, {FC, useCallback} from "react";

import { Props } from './props';
import './styles.scss';

export const ListItem: FC<Props> = ({ tasks, onDeleteTask }: Props) => {
    const onDelete = useCallback((id) => () => {
        onDeleteTask(id);
    },[onDeleteTask])
    return (
    <div className="my-3">
        <ul className="list-group">
        {tasks.map(({ title, completed, id }) => (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" checked={completed} />
                    </div>
                </div>
                <input type="text" className="form-control"  disabled={true} value={title} />
                <div className="input-group-append">
                    <button className="btn btn-danger" type="button" onClick={onDelete(id)}>Delete</button>
                </div>
            </div>
        ))}
        </ul>
    </div>
)};
