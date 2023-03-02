import Item from "./Item"

const ItemList = ({ productsList }) => {
    return (
        <>
            {productsList.map(product => <Item key={product.id} prod={product}></Item>)}
        </>
    )
}

export default ItemList