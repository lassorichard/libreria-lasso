import { Link } from "react-router-dom";
import { UseCart } from "../context/CartContext";

export const Cart = () => {
    const { cart, removeItem } = UseCart();

    const total = () => {
        let sumary = 0;
        cart.forEach((item) => {   
            const quantity = item.quantity
            const price = item.item.price
            let quantityPrice = quantity * price
            sumary += quantityPrice
        })
        return sumary.toFixed(2)
    }
    

    return (
        <>
            <section className="cart">
                <div className="container cart__container">
                    <ul className="cart__list">
                        {
                            cart.length === 0 ? 
                                <>
                                    <p>No tienes productos en el carrito</p>
                                    <Link to="/">
                                        <button className="btn btn--primary item-detail__back">
                                            Vuelve a inicio
                                        </button>
                                    </Link>
                                </>
                            : null
                        }
                        {
                            cart.map(({ item, quantity }) => {
                                return (
                                    <>
                                        <li className="cart__list__card">
                                            <img className="cart__list__card__img" src={item.pictureUrl} alt={item.title} />
                                            <div className="cart__list__card__text">
                                                <span>Título</span>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="cart__list__card__text">
                                                <span>Precio</span>
                                                <p>${item.price}</p>
                                            </div>
                                            <div className="cart__list__card__text">
                                                <span>Cantidad</span>
                                                <p>{quantity}</p>
                                            </div>
                                            <div className="cart__list__card__text">
                                                <span>Total:</span>
                                                <p>${quantity * item.price}</p>
                                            </div>
                                            <button 
                                                className="btn btn--primary cart__list__card__btn"
                                                onClick={(e)=> removeItem(item)}
                                            >
                                                Eliminar producto
                                            </button>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <div className="cart__total">
                        <span>Total a pagar:</span>
                        <p>${total()}</p>
                    </div>
                </div>
            </section>
        </>
    )
}