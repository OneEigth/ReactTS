import React from "react";
import Categories from "./Categories";
import Manufactures from "./Manufactures";
import {Sort} from "./Sort";
import {CProduct} from "../Product";
import { Product} from "../../../model";


interface SearchProps {
    search: any,

}
/*interface Product {
    productId: number
    title: string
    price: number
    description: string
    specifications: {
        resolution: string
        lensType: string
        fieldOfView: string
        irLEDs: number
        motionDetection: boolean
        videoAnalytics: boolean
        weatherproof: string
        operatingTemperature: string
        audioSupport: boolean
        connectionType: string
        powerSupply: string
        storage: string
        dimensions: string
        weight: string
        mountingType: string
        color: string
    };
    category: Category
    image: string
    article:string
    manufacturer: string
}*/


export function CFilter({search}: SearchProps) {
    const [products, setProducts] = React.useState<Product[]>([])
    const [categoryId, setCategoryId] = React.useState(0)
    const [sort, setSort] = React.useState({
        sortItemId: 1,
        sortItemName: 'Популярные',
        sortName: 'rating'
    })


    /*React.useEffect(() => {
        fetch(
            `https://65b0cfb2d16d31d11bdd4e24.mockapi.io/products?
                    ${categoryId > 1 ? `category=${categoryId}&` : ''}
                    sortBy=${sort.sortName.replace('-','')}
                    &order=${sort.sortName.includes('-') ? 'asc' : 'desc'}`)
            .then((res) => res.json())
            .then((arr) => {
                setProducts(arr)
            })
        window.scrollTo(0,0)
    },[categoryId, sort])*/

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://65b0cfb2d16d31d11bdd4e24.mockapi.io/products?${categoryId > 1 ? `category=${categoryId}&` : ''}sortBy=${sort.sortName.replace('-', '')}&order=${sort.sortName.includes('-') ? 'asc' : 'desc'}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data);
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData().catch((error) => {
            // Обработка ошибки, если она произошла вне асинхронной функции
            console.error('Unhandled error:', error);
        });
    }, [categoryId, sort]);

    const productCards = products.filter(obj => {
            if (obj.title.toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
            return false;
        }
    ).map((product, index) => {
        return (<CProduct key={index} product={product}/>);
    })

    return (
        <div className="bg-white">
            <div>
                <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    <div className="fixed inset-0 z-40 flex">
                        <div
                            className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex justify-between px-1">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <form className="mt-4 border-t border-gray-200">
                                <Categories value={categoryId} onClickCategory={(id: any) => setCategoryId(id)}/>
                                <Manufactures/>

                            </form>
                        </div>
                    </div>
                </div>

                <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-auto">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        </h1>
                        <div className="flex items-center">
                            <div className="relative inline-block text-left">

                                <Sort value={sort} onChangeSort={(id: any) => setSort(id)}/>

                            </div>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <button type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                <span className="sr-only">Filters</span>
                                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
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
                                <Categories value={categoryId} onClickCategory={(id: any) => setCategoryId(id)}/>

                                <Manufactures/>
                            </form>
                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3
                                     xl:grid-cols-3 xl:gap-x-16 pr-72 pl-12">
                                    {productCards}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}