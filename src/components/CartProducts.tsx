import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../redux/cart/slice";
import {CartItem as CartItemType} from "../redux/cart/types";


type CartProductsProps = {
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    count: number;
};
export const CartProducts: React.FC<CartProductsProps> = ({
 id, title, price, image, category,count}) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            } as CartItemType),
        );
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        if (window.confirm('Ты действительно хочешь удалить товар?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <div>
            <li className="flex py-6">
                <div
                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Link key={id} to={`/cartProduct/${id}`}>
                    <img
                        src={image}
                        alt="img"
                        className="h-full w-full object-cover object-center"/>
                    </Link>
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div
                            className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">{title}</a>
                            </h3>
                            <p className="ml-4">{price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">


                        <div className="flex">
                            <button type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={onClickRemove}>
                                Remove
                            </button>
                        </div>
                        <div className="cart__item-count flex items-center">
                            <button
                                onClick={onClickMinus}
                                disabled={count === 1}
                                className="button button--outline button--circle cart__item-count-btn"
                            >
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="2" fill="#EB5A1E"/>
                                </svg>
                            </button>
                            <b className="mx-2">{count}</b>
                            <button onClick={onClickPlus}
                                    className="button button--outline button--circle cart__item-count-btn">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.92 8.64C5.92 9.17016 5.49017 9.6 4.96 9.6C4.42985 9.6 4 9.17016 4 8.64V0.96C4 0.42984 4.42985 0 4.96 0C5.49017 0 5.92 0.42984 5.92 0.96V8.64Z"
                                        fill="#EB5A1E"></path>
                                    <path
                                        d="M8.64 4C9.17014 4 9.6 4.42985 9.6 4.96C9.6 5.49017 9.17014 5.92 8.64 5.92H0.96C0.429817 5.92 0 5.49017 0 4.96C0 4.42985 0.429817 4 0.96 4H8.64Z"
                                        fill="#EB5A1E"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default CartProducts;