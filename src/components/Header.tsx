import React, {useEffect, useRef, useState} from "react";

import {Link} from "react-router-dom";
import Search from "./SideBar/Search";


export function Header() {
    const [isProductMenuOpen, setProductMenuOpen] = useState(false);
    const productMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (productMenuRef.current && !productMenuRef.current.contains(event.target as Node)) {
                setProductMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [productMenuRef]);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-0.5 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <a className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                        </a>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" onClick={() => setProductMenuOpen(!isProductMenuOpen)}
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                                aria-expanded={isProductMenuOpen ? 'true' : 'false'}>
                            Products
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>

                        {isProductMenuOpen && (
                            <div
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">

                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                 aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/>
                                            </svg>
                                        </div>

                                        <div className="flex-auto">
                                            <a className="block font-semibold text-gray-900">
                                                PTZ-видеокамеры
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-gray-600">Мониторинг с возможностью
                                                управления</p>
                                        </div>

                                    </div>
                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                 aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"/>
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                IP-видеокамеры
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-gray-600">Безопасность внутри помещения</p>
                                        </div>
                                    </div>

                                    <div
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                 aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/>
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900">
                                                IP-видеорегистраторы
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-gray-600">Сетевые видеорегистраторы</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    <a href="#"
                                       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Промо
                                    </a>
                                    <a href="#"
                                       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Отдел продаж
                                    </a>
                                </div>
                            </div>)}
                    </div>
                    <Link to="/">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
                    </Link>
                    <Link to="/products">
                        <a className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                    </Link>


                </div>

                <Search/>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    <Link to="/cart">
                        <div className="flex items-center">
                            <img className="h-6 w-auto ml-2"
                                 src="https://cdn-ru.bitrix24.ru/b18220310/landing/9ef/9ef5601e07462bc3245afaa626d431c6/6467eecac294bf28a5a7a4809767ab2b_1x.png"
                                 alt="Корзина"/>
                        </div>
                    </Link>
                </div>
            </nav>


        </header>
    )
}
