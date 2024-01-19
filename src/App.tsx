import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ProductPage} from "./pages/ProductPage";

function App() {

        return (
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductPage/>}/>
            </Routes>
        )
}



export default App;