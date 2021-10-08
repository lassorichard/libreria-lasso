import { UseCart } from "../context/CartContext";

export const CheckoutModal  = ({handleCheckout}) => {
    const { setBuyer, buyer } = UseCart();

    function onInputChange(e) {
        setBuyer((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    return(
        <>
            <form className="checkout-modal" onSubmit={handleCheckout}>
                <div className="checkout-modal__container">
                <h3 className="checkout-modal__title">Llena estos datos para finalizar tu compra</h3>
                    <div className="checkout-modal__form">
                        <input onChange={onInputChange} placeholder="Nombre" type="text" name="name" id="name" />
                    </div>
                    <div className="checkout-modal__form">
                        <input onChange={onInputChange} placeholder="Celular" type="number" name="phone" id="phone" />
                    </div>
                    <div className="checkout-modal__form">
                        <input onChange={onInputChange} placeholder="Correo Electrónico" type="email" name="email" id="email" />
                    </div>
                    <div className="checkout-modal__form">
                        <input placeholder="Confirma Correo electrónico" type="email" name="confemail" id="confemail" />
                    </div>
                    <button
                        type="submit"
                        disabled={buyer.name === "" || buyer.phone === "" || buyer.email === ""}
                        className="btn btn--primary"
                    >
                        Finalizar compra
                    </button>

                </div>
            </form>
        </>
    )
}