import { useEffect, useState } from "react"
import { getProducts } from "../firebase"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        setLoad(true)

        getProducts()
            .then((products) => {
                let filteredProducts = products.filter((prod) => prod.stock > 0)

                if (category) {
                    filteredProducts = filteredProducts.filter(
                        (prod) => prod.category === category
                    )
                }

                setProducts(filteredProducts)
                setLoad(false)

            })
            .catch((error) => {
                console.log(error)
                setLoad(false)
            })
    }, [category])

    return (
        <>
            {load ? (
                <p>Loading...</p>
            ) : (
                <section className="product-container">
                    <ItemList products={products} />
                </section>
            )}
        </>
    )
}

export default ItemListContainer