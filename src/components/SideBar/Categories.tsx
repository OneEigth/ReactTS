import React from 'react';

interface Category {
    categoryId: number
    categoryName: string
    description: string
}

type CategoriesProps = {
    value: number;
    onChangeCategory: (idx: number) => void;
};


const categories: Category[] = [
    {
        categoryId: 1,
        categoryName: 'Все',
        description: 'lefai'
    },
    {
        categoryId: 2,
        categoryName: 'IP-видеокамеры',
        description: 'lefai'
    },
    {
        categoryId: 3,
        categoryName: 'PTZ-видеокамеры',
        description: 'lefai'
    },
    {
        categoryId: 4,
        categoryName: 'IP-видеорегистраторы',
        description: 'lefai'
    }
]

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <div>
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                {categories.map((categoryName) =>
                    <li>
                        <a
                           key={categoryName.categoryId}
                           className={`block px-2 py-3 ${value === categoryName.categoryId ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                           onClick={() => onChangeCategory(categoryName.categoryId)}>{categoryName.categoryName}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}
)
export default Categories;