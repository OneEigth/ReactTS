import React from 'react';



import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import {MarketPlace} from "./pages/MarketPlace";
import Cart from "./pages/Cart";




function App() {
    const [search, setSearch] = React.useState('');

        return (
            <div>
                <Header search={search} setSearch={setSearch}/>
                <div className="content">

                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/products" element={<MarketPlace search={search}/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>

                </div>
            </div>
        )
}
export default App;
