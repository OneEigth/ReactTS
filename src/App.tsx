import React from 'react';
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import {MarketPlace} from "./pages/MarketPlace";
import Cart from "./pages/Cart";
import {Header} from "./components/Header";

function App() {

    return (
        <div>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<MarketPlace/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default App;
