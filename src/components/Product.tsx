import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProductItemById} from "../redux/cart/selectors";
import { ProductItem } from '../redux/cart/types';
import { addItem } from '../redux/cart/slice';



type ProductProps = {
    id: string;
    title: string;
    price: number;
    image: string;
    category:string;
};

export const Product: React.FC<ProductProps> = ({
    id,title, price, image, category})=>{
    const dispatch = useDispatch()
    const ProductItem = useSelector(selectProductItemById(id))


    const addedCount = ProductItem ? ProductItem.count : 0;

    const onClickAdd = () => {
        const item: ProductItem = {
            id,
            title,
            price,
            image,
            category,
            count:0
        };
        dispatch(addItem(item));
    };


    return (
        <div className="container mx-auto flex">
            <div>
                <a className="group">
                    <div
                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src={image}
                             alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                             className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">{price}$</p>
                    <div className="flex justify-between mt-2">
                        <button
                            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-0 rounded focus:outline-none focus:shadow-outline-indigo">
                            More
                        </button>
                        <div className="flex items-center mt-2">
                            <svg className="h-5 w-5 text-gray-700 mr-1" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 8v8m-4-4h8"></path>
                            </svg>
                            В корзину
                            {addedCount > 0 && <i>{addedCount}</i>}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}
