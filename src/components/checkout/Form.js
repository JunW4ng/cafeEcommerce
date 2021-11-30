export const BuyerForm = ({ setBuyer, buyer, name }) => {

    const handleBuyerChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div>
                <input className="" type="text" name={name} onChange={handleBuyerChange}></input>
            </div>
        </>
    )
}