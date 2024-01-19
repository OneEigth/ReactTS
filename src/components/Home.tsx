import React from "react";
import {CProduct} from "./Product";
import {products} from "../data/products";
import {CWithStats} from "./WithStats";
import {Header} from "./Header";
import {CProductFeatures} from "./ProductFeatures";
import {CCategoryPreviews} from "./CategoryPreviews";
export function Home(){
    return(
        <div>
            <Header/>
            <CWithStats/>
            <CProductFeatures/>
            <CCategoryPreviews/>

        </div>
    )
}