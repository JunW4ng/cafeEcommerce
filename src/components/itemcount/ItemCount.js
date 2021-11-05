export const ItemCount = ({ count, stock, onIncrease, onDecrease, postAdd }) => {

    return (
        <>
            <button onClick={() => onDecrease()}>-</button>
            <span>{count}</span>
            <button onClick={() => onIncrease()}>+</button>
            <br></br>
            <button onClick={() => postAdd()}>Agregar al carro</button>
            <h4>Stock: {stock}</h4>
        </>
    )
}