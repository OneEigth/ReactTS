import React from "react";
import {CFilter} from "../components/SideBar/Filter";

interface SearchProps {
    search: any,

}
export function MarketPlace({search}:SearchProps) {
    return (
        <div className="w-auto p-2 bg-blue-200">
            <CFilter search={search}/>
        </div>
    )
}