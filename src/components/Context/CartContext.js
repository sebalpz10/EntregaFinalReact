import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(vehicle => vehicle.id === id)
    }

    const addItem = (vehicle, quantity) => {
        if (isInCart(vehicle.id)) {
            const index = cart.findIndex(car => car.id === vehicle.id)
            const aux = [...cart]
            aux[index].qnty += quantity
            aux[index].price = aux[index].qnty * aux[index].price
            setCart(aux)
        } else {
            const newVehicle = {
                ...vehicle,
                qnty: quantity,
                price: vehicle.price * quantity
            }

            setCart([...cart, newVehicle])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(car => car.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, car) => acum += car.qnty, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, car) => acum + (car.qnty * car.price), 0)
    }

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}