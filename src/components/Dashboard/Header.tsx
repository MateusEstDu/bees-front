import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './css/Header.css';

function Header() {
    const { user } = useContext(UserContext);

    return(
        <header className='header'>
            <div className='header__content'>
                <nav>
                    <NavLink className="header__content__link" to="/"> <BsFillArrowLeftCircleFill className='header__content__icon' /> Go back</NavLink>
                </nav>
                <div className='header__content__name'>
                    <span>Hello, {user.name}!</span>
                </div>
            </div>
        </header>
    );
}

export default Header;