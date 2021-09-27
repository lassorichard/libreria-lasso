import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const newItem = { item, quantity }
        setCart((prevState) => [...prevState, newItem])
    };

    const removeItem = (id) => {
        // Eliminar product con id elegido
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        // Mirar si existe un producto con el id elegido
    };

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach(product => {
            quantity += product.quantity
        });
        return quantity
    }

    const value = { cart, addItem, removeItem, clear, isInCart, getQuantity }

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