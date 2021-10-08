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
                    items?.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link
                                    to={`/product/${item.id}`}
                                >
                                    <Item
                                        title={item.title}
                                        author={item.author}
                                        pictureUrl={item.pictureUrl}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}