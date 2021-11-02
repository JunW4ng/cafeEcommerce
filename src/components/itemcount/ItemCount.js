import { useState } from "react"

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial));

    const onIncrease = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const onDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <h3> Items Agregados: {count} </h3>
            <button onClick={onDecrease}>-</button>
            <button onClick={() => onAdd()}>Agregar</button>
            <button onClick={onIncrease}>+</button>
            <h3>Stock: {stock}</h3>
        </>
    )
}