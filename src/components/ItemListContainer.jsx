import { ItemList } from "./ItemList"

import Products from '../assets/files/products.json'
import { useState, useEffect } from "react";

export const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getProducts()
        .then((result) => setItems(result))
        .finally( ()=> setLoader(false) )
    }, [])

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products)
            }, 2000);
        })
    }

    return (

        <>
            <section className="itemlistcontainer container">
                <aside className="itemlistcontainer__aside">
                    <h1 className="itemlistcontainer__aside__title">
                        {saludo}
                    </h1>
                </aside>
                <div className="itemlistcontainer__content">
                    <ItemList 
                        items={items}
                        loader={loader}
                    />
                </div>
            </section>
        </>
    );
};
