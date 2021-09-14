import { ItemDetail } from "./ItemDetail"
import Products from '../assets/files/products.json'
import { useState, useEffect } from "react";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getItem()
        .then((result) => setItem(result))
        .finally( ()=> setLoader(false) )
    }, [])

    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products[0])
            }, 2000);
        })
    }

    return (
        <> 
            <div className="item-detail-container">
                <ItemDetail 
                    key={item.id}
                    item={item}
                    loader={loader}
                />
            </div>
        </>
    )
}