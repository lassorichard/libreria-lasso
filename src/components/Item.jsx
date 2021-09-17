
export const Item = ({title, author, pictureUrl}) => {

    return(
        <>
            <div className="item">
                <img className="item__img" src={pictureUrl} alt={title} />
                <h1 className="item__title">{title}</h1>
                <h3 className="item__author">{author}</h3>
            </div>
        </>
    )
}