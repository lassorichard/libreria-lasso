export const ItemListContainer = ({saludo}) => {
    return (

        <>
            <section className="itemlistcontainer container">
                <aside className="itemlistcontainer__aside">
                    <h1 className="itemlistcontainer__aside__title">
                        {saludo}
                    </h1>
                </aside>
                <div className="itemlistcontainer__content">
                    Contenido
                </div>
            </section>
        </>
    );
};
