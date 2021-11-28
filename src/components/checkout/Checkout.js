import { useContext, useState } from "react";
import { addDoc, getFirestore } from "@firebase/firestore"
import { collection } from "firebase/firestore";
import { CartContext } from "../../contexts/cartContext";
import { BuyerForm } from "./Form";
import { IdOrder } from "./IdOrder"


export const Checkout = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [buyerData, setBuyerData] = useState(null);

    //Fecha de la compra
    const date = new Date();
    const orderDate = date.toLocaleDateString();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const [checkOut, setCheckOut] = useState(false)
    const [orderId, setOrderId] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newOrder = {
                buyerData,
                cart,
                totalPrice: totalPrice,
                data: orderDate
            };

            await addDoc(ordersCollection, newOrder).then(

                //Limpia los valores
                setBuyerData({
                    Name: "",
                    LastName: "",
                    Email: "",
                    Phone: ""
                }))
                .then(({ id }) => setOrderId(id))

            setCheckOut(true)
            //Limpia el carro
            clearCart()

            console.log(newOrder);

        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            {checkOut ? (

                <div>
                    <IdOrder orderId={orderId} />
                </div>
            ) : (
                <form className="container row g-3 mt-5" onSubmit={handleSubmit}>

                    <div className="col-6">
                        <label>Name</label>
                        <BuyerForm setBuyer={setBuyerData} name="Name" buyer={buyerData} />
                    </div>
                    <div className="col-6">
                        <label>Last Name</label>
                        <BuyerForm setBuyer={setBuyerData} name="LastName" buyer={buyerData} />
                    </div>
                    <div className="col-6">
                        <label>Email</label>
                        <BuyerForm setBuyer={setBuyerData} name="Email" buyer={buyerData} />
                    </div>
                    <div className="col-6">
                        <label>Phone</label>
                        <BuyerForm setBuyer={setBuyerData} name="Phone" buyer={buyerData} />
                    </div>

                    <div className="text-end">
                        <h2 className="totalPrice mt-5">TOTAL: ${totalPrice}</h2>
                        <button type="submit" className="p-2 checkButton">Proceed to checkout</button>
                    </div>

                </form>
            )}
        </>
    )
};