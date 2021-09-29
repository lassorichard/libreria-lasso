import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        const url = `http://localhost:3002/products`
        setLoader(true)
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw response;
                    }
                })
                .then((data) => {
                    setItems(data)
                })
                .catch((error) => console.log(`Se rompío todo, fue un error ${error.status}`))
                .finally(() => setLoader(false))
        }, 500);

    }, [])

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
