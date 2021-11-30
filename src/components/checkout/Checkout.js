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
                    <form className="container-fluid row justify-content-center" onSubmit={handleSubmit}>

                        <div className="col-6">
                            <label className="fs-4">Name</label>
                            <BuyerForm setBuyer={setBuyerData} name="Name" buyer={buyerData} />
                        </div>
                        <div className="col-6">
                            <label className="fs-4">Last Name</label>
                            <BuyerForm setBuyer={setBuyerData} name="LastName" buyer={buyerData} />
                        </div>
                        <div className="col-6">
                            <label className="fs-4">Email</label>
                            <BuyerForm setBuyer={setBuyerData} name="Email" buyer={buyerData} />
                        </div>
                        <div className="col-6">
                            <label className="fs-4">Phone</label>
                            <BuyerForm setBuyer={setBuyerData} name="Phone" buyer={buyerData} />
                        </div>

                        <div className="text-center">
                            <h2 className="totalPrice fs-1 mt-5">TOTAL: ${totalPrice}</h2>
                            <button type="submit" className="btn border-2 border-dark p-2 checkButton bg-dark text-white mt-2">Proceed to checkout</button>
                        </div>
                    </form>
            )}
        </>
    )
};