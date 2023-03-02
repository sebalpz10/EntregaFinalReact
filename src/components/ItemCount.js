import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)

    const handleIncrease = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleReduce = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleConfirm = () => {
        onAdd(counter)
    }

    const handleReset = () => {
        setCounter(1)
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrease}>+</button>
            <p>Quantity : {counter}</p>
            <button onClick={handleReduce}>-</button>
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default ItemCount