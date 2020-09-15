import React, {FC, useCallback } from "react";

import { Props } from './props';
import './styles.scss';

export const SearchInput: FC<Props> = ({ placeholder, onSearch }: Props) => {
    const onChangeInputValue = useCallback((e) => {
        onSearch(e.target.value.toLowerCase());
    }, [onSearch]);
    return (
        <div>
            <input id="searchInput" className="form-control" name="searchInput" type="text" placeholder={placeholder} onChange={onChangeInputValue} />
        </div>
    )
}
