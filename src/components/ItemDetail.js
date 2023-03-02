import { Link } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({ vehicle }) => {

    const { addItem } = useCartContext()

    const onAdd = (counter) => {
        addItem(vehicle, counter)
    }

    return (
        <div>
            <div>
                <img src={vehicle.image01} alt="First image" />
            </div>
            <div>
                <p>{vehicle.year + " | " + vehicle.mileage}</p>
                <h2>{vehicle.brand + " " + vehicle.model}</h2>
                <h3>US$ {new Intl.NumberFormat("de-De").format(vehicle.price)}</h3>
            </div>
            <ItemCount stock={vehicle.stock} onAdd={onAdd}></ItemCount>
            <button><Link to="/cart">Checkout</Link></button>
        </div>
    )

}

export default ItemDetail