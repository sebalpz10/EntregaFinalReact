import { NavLink } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from "./Context/CartContext";

const CartWidget = () => {

    const { getItemQuantity } = useCartContext()

    return (
        <NavLink to="/cart" className="cart-link">
            <p className="cart-p"><FaShoppingCart></FaShoppingCart></p>
            {getItemQuantity() > 0 && <span className="cart-qnty">{getItemQuantity()}</span>}
        </NavLink>
    )
}

export default CartWidget

