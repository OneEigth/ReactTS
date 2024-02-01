import React from "react";

import {CWithStats} from "../components/WithStats";
import {CProductFeatures} from "../components/ProductFeatures";
import {CCategoryPreviews} from "../components/CategoryPreviews";

export function Home(){
    return(
        <div>
            <CWithStats/>
            <CProductFeatures/>
            <CCategoryPreviews/>
        </div>
    )
}

