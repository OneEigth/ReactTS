import React from "react";


interface sortItem {
    sortItemId: number,
    sortItemName: string,
    sortName:string
}

interface SortProps {
    value: any;
    onChangeSort: any;
}

export function Sort({value, onChangeSort}: SortProps) {
    const [open, setOpen]=React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const sortlist: sortItem[] =
        [
            {
                sortItemId: 1,
                sortItemName: 'Популярные DESC',
                sortName:'rating'
            },
            {
                sortItemId: 2,
                sortItemName: 'Популярные ASC',
                sortName:'-rating'
            },
            {
                sortItemId: 3,
                sortItemName: 'По цене DESC',
                sortName:'price'
            },
            {
                sortItemId: 4,
                sortItemName: 'По цене ASC',
                sortName:'-price'
            },
            {
                sortItemId: 5,
                sortItemName: 'По алфавиту DESC',
                sortName:'title'
            },
            {
                sortItemId: 6,
                sortItemName: 'По алфавиту ASC',
                sortName:'-title'
            }
        ]

    const onClickListItem = (i: sortItem) => {
        onChangeSort(i)
        setOpen(false)
    }

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div>
                <button type="button" onClick={handleToggle}
                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        id="menu-button" aria-expanded="false" aria-haspopup="true">
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
                        {sortlist.map((obj) =>
                            <a
                                href="#"
                                key={obj.sortItemId}
                                onClick={() => onClickListItem(obj)}
                                className={`font-medium text-gray-900 block px-4 py-2 text-sm ${value.sortName === obj.sortName  ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'} `}
                                role="menuitem"
                                tabIndex={-1} id="menu-item-0">
                                {obj.sortItemName}
                            </a>
                        )}

                    </div>
                </div>
            )}
        </div>
    )
}