import { useState } from "react"

//CREAR STOCK
export const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(parseInt(initial));

    const onAdd = () => {
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
            
            <h2> Items Agregados: {count} </h2>
            <button onClick={onDecrease}>-</button>
            <button>Agregar</button>
            <button onClick={onAdd}>+</button>
            <h3>Stock: {stock}</h3>
        </>
    )
}