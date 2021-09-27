import Bag from '../assets/img/bag.svg'
import { UseCart } from '../context/CartContext'

export const CartWidget = () => {

  const { getQuantity } = UseCart();


  return (
    <>
      <div className="cart-widget">
        <img className="cart-widget__icon" src={Bag} alt="bag icon" />
        <div className="cart-widget__number">{getQuantity()}</div>
      </div>
    </>
  )
}

