import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [buyer, setBuyer] = useState({ name: "prueba", phone: "", email: "" })
    const [modal, setModal] = useState(false);

    const addItem = (item, quantity) => {
        const newItem = { item, quantity }
        if (!isInCart(item.id)) {
            setCart((prevState) => [...prevState, newItem])
        } else {
            alert('Ya se encuentra en el carrito')
        }
    };

    const removeItem = (item) => {
        const dataFiltered = cart.filter((product) => product.item.id !== item.id)
        setCart(dataFiltered)
    };

    const clear = () => {
        setModal(false)
        setCart([]);
        setTotalCart(0)
        setBuyer({ name: "prueba", phone: "", email: "" })
    };

    const isInCart = (idProp) => {
        return cart.find((item) => {
            if (item.item.id !== idProp) {
                return false
            } else {
                return true
            }
        })
    };

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach(product => {
            quantity += product.quantity
        });
        return quantity
    }

    const value = { cart, addItem, removeItem, clear, isInCart, getQuantity, totalCart, setTotalCart, buyer, setBuyer, modal, setModal }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('El UseCart tiene que usarse dentro de un CartProvider')
    }
    return context
}