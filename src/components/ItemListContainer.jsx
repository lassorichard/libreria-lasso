import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/ItemCollection";

export const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
        setLoader(true)
        productsCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log('No hay productos')
                } else {
                    setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                }
            })
            .catch((error) => console.log(`Se rompío todo, fue un error ${error.status}`))
            .finally(() => setLoader(false))
    }, [categoryId])

    const categoryFilter = items.filter((item) => categoryId === undefined ? item : categoryId === item.category )

    return (

        <>
            <section className="itemlistcontainer container">
                <aside className="itemlistcontainer__aside">
                    <h1 className="itemlistcontainer__aside__title">
                        {saludo}
                    </h1>
                </aside>
                <div className="itemlistcontainer__content">
                    {
                        
                    }
                    <ItemList
                        items={categoryFilter}
                        loader={loader}
                    />
                </div>
            </section>
        </>
    );
};
