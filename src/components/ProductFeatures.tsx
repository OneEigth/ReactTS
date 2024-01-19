import React from "react";

export function CProductFeatures() {
    return(

        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Технические характеристики</h2>
                    <p className="mt-4 text-gray-500">Камера видеонаблюдения предлагает высокоточное изображение с возможностью записи видео в различных условиях освещенности. Ознакомьтесь с ключевыми техническими характеристиками ниже.</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Производитель</dt>
                            <dd className="mt-2 text-sm text-gray-500">PELCO AXIS Dahua Hik</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Тип</dt>
                            <dd className="mt-2 text-sm text-gray-500">Высококачественная камера видеонаблюдения с функцией записи.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Разрешение</dt>
                            <dd className="mt-2 text-sm text-gray-500">1080p Full HD</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Область обзора</dt>
                            <dd className="mt-2 text-sm text-gray-500">Широкий угол обзора для полного охвата пространства.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Ночное видение</dt>
                            <dd className="mt-2 text-sm text-gray-500">Инфракрасная подсветка для качественной съемки в темное время суток.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Соединение</dt>
                            <dd className="mt-2 text-sm text-gray-500">Поддержка беспроводного и проводного подключения.</dd>
                        </div>
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://static.bhphoto.com/images/images750x750/1452678629_1187639.jpg" alt="Камера видеонаблюдения" className="rounded-lg bg-gray-100"/>
                    <img src="https://systemssec.ru/upload/iblock/319/ip_videokamera-axis-p1357_e.jpg" alt="Камера видеонаблюдения" className="rounded-lg bg-gray-100"/>
                    <img src="https://lifeinua.com/photos/board/2021/05/16240920.jpg" className="rounded-lg bg-gray-100"/>
                    <img src="https://neogid.ru/upload/iblock/8dd/vksfl0ztedofgqu2a17rztpqmsyspnx9.jpg" alt="Камера видеонаблюдения" className="rounded-lg bg-gray-100"/>
                </div>
            </div>
        </div>
    )
}