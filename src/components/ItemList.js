import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <>
            {products.map(product => <Item key={product.id} prod={product}></Item>)}
        </>
    )
}

export default ItemList