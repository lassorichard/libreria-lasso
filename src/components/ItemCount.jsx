import Bag from '../assets/img/bag.svg'

export const ItemCount = ({ stock, counter, setCounter, onAdd }) => {


    function clickMore() {
        if (counter >= 1 && counter < stock) {
            setCounter(counter + 1)
        }
    }

    function clickLess() {
        if (counter > 1) {
            setCounter(counter - 1)
        }


    }

    return (
        <>
            <div className="counter">

                <div
                    className="counter__more"
                    onClick={clickMore}
                >+</div>

                <div className="counter__number">{counter}</div>

                <div
                    className="counter__less"
                    onClick={clickLess}
                >-</div>
            </div>
            <button
                className="btn btn--primary"
                onClick={(e) => onAdd(e)}
            >
                <img src={Bag} alt="Bag icon" />
                Agregar al carrito
            </button>
        </>
    )
}