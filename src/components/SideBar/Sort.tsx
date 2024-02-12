import React from "react";
import {Sort as SortType, SortPropertyEnum} from '../../redux/filter/types';
import {useDispatch} from 'react-redux';
import {setSort} from '../../redux/filter/slice/filter';

type SortItem = {
    name: string;
    sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
    path: Node[];
};

type SortPopupProps = {
    value: SortType;
};

export const sortList: SortItem[] = [
    {name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC},
    {name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC},
    {name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC},
    {name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC},
    {name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC},
    {name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC},
];

export const Sort: React.FC<SortPopupProps> = React.memo(({value}) => {

        const dispatch = useDispatch();
        const sortRef = React.useRef<HTMLDivElement>(null);

        const [open, setOpen] = React.useState(false)

        const onClickListItem = (obj: SortItem) => {

            dispatch(setSort(obj));
            setOpen(false);
        };

        React.useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                const _event = event as PopupClick;
                if (sortRef.current && _event.path && !_event.path.includes(sortRef.current)) {
                    setOpen(false);
                }
            };
            document.body.addEventListener('click', handleClickOutside);
            return () => document.body.removeEventListener('click', handleClickOutside);
        }, []);

        return (
            <div ref={sortRef}>
                <div>
                    <button type="button"
                            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                            id="menu-button" aria-expanded="false" aria-haspopup="true"
                            onClick={() => setOpen(!open)}
                    >
                        Сортировка
                        <svg
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>

                {open && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white
                                    shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                        <div className="py-1" role="none">
                            {sortList.map((obj, i) =>
                                <a
                                    key={i}
                                    onClick={() => onClickListItem(obj)}
                                    className={`font-medium text-gray-900 block px-4 py-2 text-sm ${value.sortProperty === obj.sortProperty ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'} `}
                                    role="menuitem"
                                    tabIndex={-1} id="menu-item-0">
                                    {obj.name}
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }
)