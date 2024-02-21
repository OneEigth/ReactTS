import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import CartProducts from "../components/CartProducts";
import {useDispatch, useSelector} from "react-redux";
import {selectCart} from "../redux/cart/selectors";
import {clearItems} from "../redux/cart/slice";

import {updateLocalStorage} from "../utils/cartUtils";
import {checkOutCart} from "../redux/cart/asyncActions";

function Cart() {
    const dispatch = useDispatch();
    const {totalPrice, items, status, error} = useSelector(selectCart);

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    // Эффект для обновления данных корзины в локальном хранилище при изменении items
    useEffect(() => {
        updateLocalStorage(items);
    }, [items]);

    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearItems());
        }
    };

    const onClickCheckout = () => {
        // Вызываем асинхронный экшен для отправки корзины на сервер
        dispatch(checkOutCart(items) as any);
    };
    return (
        <div className='mx-40'>
            <div className="flex-1  overflow-y-auto px-4 py-6 sm:px-6 ">
                <div className="flex justify-center">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                        Корзина
                    </h2>
                    <div className="ml-3 flex h-7 items-center"></div>
                </div>
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((item: any) => (
                                <CartProducts key={item.id} {...item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total count</p>
                    <p>{totalCount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{totalPrice}$</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Clear Cart</p>
                    <button
                        onClick={onClickClear}
                    >Delete All</button>
                </div>

                <div className="mt-6">
                    <a href="#"
                       onClick={onClickCheckout}
                       className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600
                       px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        <Link to="/products">
                            <button type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </Link>
                    </p>
                </div>
            </div>

        </div>


    );
}

export default Cart;