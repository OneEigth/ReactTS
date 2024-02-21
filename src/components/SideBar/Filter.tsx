import React from "react";
import Categories from "./Categories";
import Manufactures from "./Manufactures";
import {Sort} from "./Sort";


import {useSelector} from "react-redux";
import {selectFilter} from "../../redux/filter/selectors";
import {selectProductData} from "../../redux/product/selectors";
import {useAppDispatch} from "../../hooks/hooks";
import {setCategoryId, setCurrentPage} from '../../redux/filter/slice/filter';
import {fetchProducts} from "../../redux/product/asyncActions";
import {Product} from "../Product";

import {Pagination} from "../Pagination";


export function CFilter() {
    const dispatch = useAppDispatch();
    const {items} = useSelector(selectProductData);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, []);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getProducts = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 1 ? String(categoryId) : '';
        const search = searchValue;

        dispatch(
            fetchProducts({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            }),
        );
        window.scrollTo(0, 0);
    };
    React.useEffect(() => {
        getProducts();
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    const products = items.map((obj: any) => <Product key={obj.id} {...obj} />);

    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-auto">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        </h1>
                        <div className="flex items-center">
                            <div className="relative inline-block text-left">
                                <Sort value={sort}/>
                            </div>
                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>

                        </div>
                    </div>
                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>

                                <Manufactures/>
                            </form>
                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3
                                     xl:grid-cols-3 xl:gap-x-16 pr-72 pl-12">
                                    {products}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                </main>
            </div>
        </div>
    )
}