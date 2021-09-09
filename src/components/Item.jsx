
export const Item = ({title, description, price, pictureUrl}) => {

    return(
        <>
            <div className="item">
                <img className="item__img" src={pictureUrl} alt={title} />
                <h1 className="item__title">{title}</h1>
            </div>
        </>
    )
}