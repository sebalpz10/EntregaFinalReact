import React from "react"
import { useNavigate } from "react-router-dom"
import { createBuyOrder, getBuyOrder, getProduct, updateProduct } from "../firebase"
import { useCartContext } from "./Context/CartContext"

const Checkout = () => {
    const { totalPrice, cart, emptyCart } = useCartContext()
    const formData = React.useRef()
    let navigate = useNavigate()

    const consultForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(formData.current)
        const client = Object.fromEntries(datForm)

        const aux = [...cart]

        aux.forEach(prodCart => {
            getProduct(prodCart.id)
                .then(prodDb => {
                    if (prodDb.stock >= prodCart.qnty) {
                        prodDb.stock -= prodCart.qnty
                        updateProduct(prodCart.id, prodDb)
                    } else {
                        //           -------- Toast no hay stock
                        emptyCart()
                    }
                })
        })

        createBuyOrder(client, totalPrice(), new Date().toISOString())
            .then(buyOrder => {
                if (client.email === client.repeatEmail) {
                    getBuyOrder(buyOrder.id)
                        .then(item => {
                            //          ----- Toast gracias por su compra
                            emptyCart()
                            e.target.reset()
                            navigate("/")
                        })
                        .catch(error => {
                            //    --- Toast su orden no fue generada con exito
                        })
                } else {
                    /// ---- Toast su email no coincide
                }
            })
    }

    return (
        <div className="checkout-container">
            <form onSubmit={consultForm} ref={formData}>
                <div>
                    <label htmlFor="name" className="checkout-label"></label>
                    <input type="text" name="name" placeholder="Name and surname" required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="email" className="checkout-label"></label>
                    <input type="email" name="email" placeholder="Email" required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="email" className="checkout-label"></label>
                    <input type="email" name="repeatEmail" placeholder="Confirm your email" required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="dni" className="checkout-label"></label>
                    <input type="number" name="dni" placeholder="D.N.I." required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="phone" className="checkout-label"></label>
                    <input type="number" name="phone" placeholder="Phone number" required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="address" className="checkout-label"></label>
                    <input type="text" name="address" placeholder="Shipping Address" required className="checkout-input" />
                </div>
                <div>
                    <label htmlFor="address" className="checkout-label"></label>
                    <input type="text" name="address" placeholder="Postal code" required className="checkout-input" />
                </div>
                <button type="submit" className="checkout-btn">BUY!</button>
            </form>
        </div>
    )
}

export default Checkout