import React from 'react';

interface SearchProps {
    search: any,
    setSearch:any
}
function Search({search, setSearch}: SearchProps) {


    const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
        // Здесь вы можете добавить логику для обработки изменений поискового запроса
    };
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" >
            <input
                type="text"
                placeholder="Введите запрос"
                className="p-2 w-50  border border-gray-300 mr-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSearchChange}
            >
                Поиск
            </button>
        </div>
    );
}

export default Search;