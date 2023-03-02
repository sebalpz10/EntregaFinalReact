import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [vehicle, setVehicle] = useState({})
    const { id } = useParams()

    useEffect(() => {

        //Aca va el toast

        const vehiclesCollection = collection(db, "vehicles")

        const reference = doc(vehiclesCollection, id)
        const order = getDoc(reference)

        order
            .then((res) => {
                const product = res.data()
                setVehicle(product)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <ItemDetail vehicle={vehicle}></ItemDetail>
    )
}

export default ItemDetailContainer