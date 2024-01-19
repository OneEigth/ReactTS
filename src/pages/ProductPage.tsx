import React from "react";
import {Header} from "../components/Header";
import {products} from "../data/products";
import {CProduct} from "../components/Product";
import {CFilter} from "../components/Filter";
import {SelectMenu} from "../components/forms/SelectMenu";

export function ProductPage() {
    return (
        <div className="container mx-auto flex flex-col">
            <Header/>
            <div className="flex">
                {/* Блок с фильтрами слева */}
                <div className="w-1/4 p-4 bg-gray-100">
                    <CFilter/>
                    <SelectMenu/>
                </div>
                <div className="container mx-auto flex flex-col">
                    <div className="bg-white">
                        <div style={{ paddingRight: '1rem' }} className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 pr-4">
                            <h2 className="sr-only">Products</h2>
                            <div
                                className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 xl:gap-x-16 pr-72 pl-12">
                                {products.map((product, index) => (
                                    <CProduct key={index} product={product}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}