import { Loader } from './Loader'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Bag from '../assets/img/bag.svg'

export const ItemDetail = ({ item, loader }) => {

    const initial = 1
    const [counter, setCounter] = useState(initial)
    const [itemAdded, setItemAdded] = useState(0)
    const [hideCounter, setHideCounter] = useState(true)

    const onAdd = (e) => {
        setItemAdded(counter)
        setHideCounter(false)
    }

    return (
        <>
            {
                loader === true ? <Loader /> : null
            }
            <div className="item-detail">
                <img className="item-detail__img" src={item.pictureUrl} alt={item.title} />
                <div className="item-detail__column">
                    <h2 className="item-detail__column__title">
                        {item.title}
                    </h2>
                    <h3 className="item-detail__column__author">
                        {item.author}
                    </h3>
                    <p className="item-detail__column__description">
                        {item.description}
                    </p>
                    <p className="item-detail__column__price">
                        Precio: ${item.price}
                    </p>
                    <p className="item-detail__column__stock">
                        Unidades disponibles: {item.stock}
                    </p>
                    {
                        hideCounter ?
                            <ItemCount
                                stock={item.stock}
                                counter={counter}
                                setCounter={setCounter}
                                onAdd={onAdd}
                            />
                            :
                            <Link to="/cart">
                                <p>Seleccionaste {itemAdded} unidades</p>
                                <button className="btn btn--primary item-detail__back">
                                    <img src={Bag} alt="Bag icon" />
                                    Finalizar Compra
                                </button>
                            </Link>
                    }

                    <Link to="/">
                        <button className="btn btn--primary item-detail__back">
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}