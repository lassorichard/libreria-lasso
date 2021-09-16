import { Item } from './Item';
import { Loader } from './Loader'
import { Link } from 'react-router-dom';

export const ItemList = ({ items, loader }) => {


    
    return (
        <>
            {
                loader && <Loader />
            }
            <section className="item-list">
                {
                    items.map((item) => {
                        return (
                            <>
                                <Link
                                    to={`/product/${item.id}`}
                                    key={item.id}
                                >
                                    <Item
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        pictureUrl={item.pictureUrl}
                                    />
                                </Link>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}