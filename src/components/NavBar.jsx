import Book from '../assets/img/book.svg'
import Home from '../assets/img/home.svg'
import Headphone from '../assets/img/headphones.svg'
import { CartWidget } from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

    return (
        <>
            <nav className="header">
                <div className="container header__container">
                    <Link to={'/'} className="header__logo">
                        Librería <span>Lasso</span>
                    </Link>
                    <ul className="header__nav">

                        <NavLink
                            to={`/`}
                            className="header__nav__item"
                            exact activeClassName="active"
                        >
                            <li>
                                <img src={Home} alt="Home icon" />
                                Home
                            </li>
                        </NavLink>

                        <NavLink
                            to={`/category/book`}
                            className="header__nav__item"
                            activeClassName="active"
                        >
                            <li>
                                <img src={Book} alt="book icon" />
                                Books
                            </li>
                        </NavLink>

                        <NavLink
                            to={`/category/audiobook`}
                            className="header__nav__item"
                            activeClassName="active"
                        >
                            <li>
                                <img src={Headphone} alt="book icon" />
                                AudioBooks
                            </li>
                        </NavLink>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}