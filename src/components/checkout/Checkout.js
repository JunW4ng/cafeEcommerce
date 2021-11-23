import { useContext, useState } from "react";
import { addDoc, getFirestore } from "@firebase/firestore"
import { collection } from "firebase/firestore";
import { CartContext } from "../../contexts/cartContext";
import { BuyerForm } from "./Form";

export const Checkout = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [buyerData, setBuyerData] = useState(null);

    //Fecha de la compra
    const date = new Date();
    const orderDate = date.toLocaleDateString();


    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newOrder = {
                buyerData,
                cart,
                totalPrice: totalPrice,
                data: orderDate
            };

            const results = await addDoc(ordersCollection, newOrder).then(
                setBuyerData({
                    Name: "",
                    LastName: "",
                    Email: "",
                    Phone: ""
                }));
            console.log(results);
            console.log(newOrder);

            //Limpia el carro
            clearCart()
            
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <form className="container row g-3" onSubmit={handleSubmit}>

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
                    <h2 className="totalPrice">TOTAL: ${totalPrice}</h2>
                    <button type="submit" className="p-2 checkButton">Proceed to checkout</button>
                </div>

            </form>
        </>
    )
}