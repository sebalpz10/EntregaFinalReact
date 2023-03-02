import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
import Checkout from "./Checkout"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"

const MainRoutes = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
                <Route path="/category/:category" element={<ItemListContainer></ItemListContainer>}></Route>
                <Route path="/vehicle/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Routes>
        </main>
    )
}

export default MainRoutes