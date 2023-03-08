import { Link } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"

const Cart = () => {
    const { cart, emptyCart, totalPrice, removeItem } = useCartContext()

    return (
        <>
            {cart.length === 0 ?
                <div>
                    <h1 className="cart">Empty cart...</h1>
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                </div>
                :
                <div>
                    {
                        cart.map((car) =>
                            <div className="cart-card" key={"car-${car.id}"}>
                                <div>
                                    <img src={car.image02} alt={car.model} className="cart-card__image" />
                                </div>
                                <div className="cart-card__container">
                                    <div className="cart-card__body">
                                        <h5 className="cart-card__body-model">{car.model}</h5>
                                        <p className="cart-card__body-text">Number of vehicles: {car.quantity}</p>
                                        <p className="cart-card__body-text">Price by unit ${new Intl.NumberFormat("de-De").format(car.price)}</p>
                                        <p className="cart-card__body-text">Total price: {new Intl.NumberFormat("de-De").format(car.price * car.quantity)}</p>
                                    </div>
                                    <button className="cart-card__btn" onClick={() => removeItem(car.id)}>Remove Vehicle</button>
                                </div>
                            </div>
                        )
                    }

                    <div className="cart-plus">
                        <p className="cart-plus__text">Summary of purchase: ${new Intl.NumberFormat("de-De").format(totalPrice())}</p>
                        <button className="cart-plus__btn-empty" onClick={emptyCart}>Empty cart</button>
                        <button className="cart-plus__btn-more"><Link to="/">Keep shopping</Link></button>
                        <button className="cart-plus__btn-check"><Link to="/checkout">Checkout</Link></button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart