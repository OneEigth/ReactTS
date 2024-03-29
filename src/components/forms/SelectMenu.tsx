import React, {useState} from "react";


export function SelectMenu() {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event:any) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
    }

    return (
        <div>
            <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
            </label>
            <div className="relative mt-2">
                <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="block appearance-none w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    aria-labelledby="listbox-label"
                >
                    <option value="1">Tom Cook</option>
                    <option value="2">Wade Cooper</option>
                    {/* Добавьте дополнительные элементы, например: */}
                    {/* <option value="3">Еще кто-то</option> */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
    }