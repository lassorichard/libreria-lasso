import { ItemDetail } from "./ItemDetail"
import { Loader } from './Loader'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loader, setLoader] = useState(false)
    const { itemId } = useParams();

    useEffect(() => {
        const url = `http://localhost:3001/products/${itemId}`
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