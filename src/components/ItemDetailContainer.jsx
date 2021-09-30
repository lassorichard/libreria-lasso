import { ItemDetail } from "./ItemDetail"
import { Loader } from './Loader'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/ItemCollection";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(false)
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
        const product = productsCollection.doc(itemId);
        setLoader(true)
        product
            .get()
            .then((doc) => {
                if (!doc) {
                    console.log('no tiene producto')
                } else {
                    setItem({ id: doc.id, ...doc.data() })
                }
            })
            .catch((error) => console.log(`Se rompío todo, fue un error ${error.status}`))
            .finally(() => setLoader(false))
            
        // const url = `http://localhost:3002/products/${itemId}`
        // setTimeout(() => {
        //     fetch(url)
        //         .then((response) => {
        //             if (response.ok) {
        //                 return response.json();
        //             } else {
        //                 throw response;
        //             }
        //         })
        //         .then((data) => setItem(data))
        //         .catch((error) => console.log(`Se rompío todo, fue un error ${error.status}`))
        //         .finally(() => setLoader(false))
        // }, 500);

    }, [itemId])

    return (
        <>
            {
                loader === true ? <Loader /> :
                    <div className="item-detail-container">
                        <div className="item-detail-container__container container">
                            <ItemDetail
                                key={item.id}
                                item={item}
                            />
                        </div>
                    </div>
            }

        </>
    )
}