export const ItemCount = ({ item ,count, onIncrease, onDecrease, addItem, removeItem, clearCart }) => {

    return (
        <>
            <button onClick={() => onDecrease()}>-</button>
            <span>{count}</span>
            <button onClick={() => onIncrease()}>+</button>
            <br></br>
            <button onClick={() => addItem(item, count)}>Agregar al carro</button>
            <hr></hr>
            <button onClick={() => removeItem(item)}>Eliminar del carro</button>
            <button onClick={() => clearCart(item)}>Vaciar el carro</button>
            <h4>Stock: {item.stock}</h4>
        </>
    )
}