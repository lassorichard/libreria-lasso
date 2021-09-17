import { Loader } from './Loader'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({item, loader}) => {
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
                    <ItemCount 
                        stock={10}
                    />
                </div>
            </div>
        </>
    )
}