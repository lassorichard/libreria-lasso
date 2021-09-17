import { useState } from 'react'
import Bag from '../assets/img/bag.svg'

export const ItemCount = ({stock}) => {
    
    const initial = 1
    const [items, setItems] = useState(initial)

    function clickMore() {
        if ( items >= 1 && items < stock ) {
            setItems(items + 1)
        }
    }

    function clickLess() {
        if ( items > 1 ) {
            setItems(items - 1)
        } 
        
        
    }

    return (
        <>  
            <div className="counter">

                <div 
                    className="counter__more"
                    onClick={clickMore}
                >+</div>

                <div className="counter__number">{items}</div>

                <div 
                    className="counter__less"
                    onClick={clickLess}
                >-</div>

            </div>
            <button className="btn btn--primary">
                <img src={Bag} alt="Bag icon" />
                Agregar al carrito
            </button>
        </>
    )
}