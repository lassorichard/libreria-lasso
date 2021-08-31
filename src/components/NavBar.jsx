import Book from '../assets/img/book.svg'
import Headphone from '../assets/img/headphones.svg'
export const NavBar = () => {

    return(
        <>
            <nav className="header">
                <div className="container header__container">
                    <h2 className="header__logo">Librería <span>Lasso</span></h2>
                    <ul className="header__nav">
                        <li className="header__nav__item active">
                            <img src={Book} alt="book icon" />
                            Books
                        </li>
                        <li className="header__nav__item">
                            <img src={Headphone} alt="book icon" />
                            AudioBooks
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}