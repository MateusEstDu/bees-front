import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function Header() {
    const { user } = useContext(UserContext);

    return(
        <header>
            <p> Go Back </p>
            <p> Olá {user.name} </p>
        </header>
    );
}

export default Header;