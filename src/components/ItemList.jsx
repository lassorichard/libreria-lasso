import { Item } from './Item';
import { Loader } from './Loader'

export const ItemList = ({items, loader}) => {

    return(
        <>
            {
                loader === true ? <Loader /> : null
            }
            <section className="item-list">
                {
                    items.map((item) => {
                        return (
                            <Item 
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                pictureUrl={item.pictureUrl}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}