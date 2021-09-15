import { ItemDetail } from "./ItemDetail"
import { Loader } from './Loader'
import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const url = "http://localhost:3001/products/2"
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
                .then((data) => setItem(data))
                .catch((error) => console.log(`Se rompío todo, fue un error ${error.status}`))
                .finally(() => setLoader(false))
        }, 2000);

    }, [])

    return (
        <>
            {
                loader === true ? <Loader /> :
                    <div className="item-detail-container">
                        <ItemDetail
                            key={item.id}
                            item={item}
                        />
                    </div>
            }

        </>
    )
}