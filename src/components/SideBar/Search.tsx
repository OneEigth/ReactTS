import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../../redux/filter/slice/filter';
import debounce from 'lodash.debounce';

export const Search: React.FC = () => {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 150),
        [],
    );
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <input
                ref={inputRef}
                placeholder="Введите запрос"
                className="p-2 w-50  border border-gray-300 mr-2"
                value={value}
                onChange={onChangeInput}
            />
        </div>
    );
}
export default Search;