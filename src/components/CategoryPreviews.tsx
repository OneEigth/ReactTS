import React from "react";

export function CCategoryPreviews (){
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Категории</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {/* Категория: Уличные камеры */}
                        <div className="group relative">
                            <div
                                className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://videonablydenie.kz/static/uploads/files/95839773d8aef1e252b3297675c4bef0.jpg" alt="IP-видеорегистраторы"
                                     className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    IP-видеорегистраторы
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Сетевые видеорегистраторы Dahua серий Ultra, Pro и Lite предназначены для различных применений.</p>
                        </div>

                        {/* Категория: Внутренние камеры */}
                        <div className="group relative">
                            <div
                                className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://eleden.shop/image/cache/catalog/pics/53c03102f18eaa4eff019d7a47210b0f-800x800.jpg" alt="Внутренняя камера видеонаблюдения"
                                     className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    IP-видеокамеры
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Безопасность внутри помещения</p>
                        </div>

                        {/* Категория: Уличные управляемые камеры */}
                        <div className="group relative">
                            <div
                                className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="http://madeb2b.com/ProductImages/0/274009824-01.jpeg"
                                     alt="Уличная управляемая камера видеонаблюдения"
                                     className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    PTZ-видеокамеры
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Мониторинг с возможностью
                                управления</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}