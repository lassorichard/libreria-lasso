import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckoutModal } from "../components/CheckoutModal";
import { UseCart } from "../context/CartContext";
import { getFirestore } from "../firebase/ItemCollection";
import firebase from 'firebase/app'
import 'firebase/firestore';

export const Cart = () => {
    const { cart, removeItem, clear, totalCart, setTotalCart, buyer, modal, setModal } = UseCart();
    const [message, setMessage] = useState(false);
    const [idNewOrder, setIdNewOrder] = useState();

    useEffect(() => {
        const total = () => {
            let sumary = 0;
            cart.forEach((item) => {
                const quantity = item.quantity
                const price = item.item.price
                let quantityPrice = quantity * price
                sumary += quantityPrice
            })

            return setTotalCart(sumary.toFixed(2))
        }
        total()
    }, [cart, setTotalCart])

    const newOrder = {
        buyer: buyer,
        items: cart,
        total: totalCart,
        date: firebase.firestore.FieldValue.serverTimestamp(),
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const ordersCollection = db.collection("orders");

        ordersCollection
            .add(newOrder)
            .then((docRef) => setIdNewOrder(docRef.id))
            .catch((error) => console.log(error));

        cart.forEach((item) => {
            const productsCollection = db.collection("products");
            const updateCollection = productsCollection.doc(item.item.id);
            updateCollection
                .update({ stock: item.item.stock - item.quantity })
        })
        setMessage(true)
        clear()
    }

    return (
        <>
            <section className="cart">
                <div className="container cart__container">
                    <ul className={message !== true ? 'cart__list' : 'cart__list__message'}>
                        {
                            message === true ?
                                <>
                                    <p className="cart__list__message">Se ha generado el siguiente ID de su compra: <strong className="cart__list__message--strong">{idNewOrder}</strong> </p>
                                    <p className="cart__list__message--strong">¡Gracias por comprar!</p>
                                    <Link to="/">
                                        <button className="btn btn--primary cart__list__message--btn">
                                            Vuelve a inicio
                                        </button>
                                    </Link>
                                </>
                                :
                                null
                        }
                        {
                            cart.length === 0 && message !== true ?
                                    <>
                                        <p className="cart__list__message">No tienes productos en el carrito</p>
                                        <Link to="/">
                                        <button className="btn btn--primary cart__list__message--btn">
                                            Vuelve a inicio
                                        </button>
                                        </Link>
                                    </>
                                : null

                        }
                        {
                            cart.map(({ item, quantity }) => {
                                return (
                                    <div key={item.id}>
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
                                                onClick={(e) => removeItem(item)}
                                            >
                                                Eliminar producto
                                            </button>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    {
                        cart.length !== 0 && message !== true ? 
                        <div className="cart__total">
                            <span>Total a pagar:</span>
                            <p>${totalCart}</p>
                            <button
                                className="btn btn--primary"
                                onClick={clear}
                            >
                                Limpiar carrito
                            </button>
                            <button
                                className="btn btn--secondary"
                                onClick={()=> setModal(true)}
                            >
                                Finalizar compra
                            </button>
                        </div> : null
                    }
                    {
                        modal === true ?
                        <CheckoutModal 
                            buyer={newOrder.buyer}
                            handleCheckout = {handleCheckout}
                        />
                        : null
                    }
                </div>
            </section>
        </>
    )
}