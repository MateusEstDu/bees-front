import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function Header() {
    const { user } = useContext(UserContext);

    return(
        <header>
            <p> AAAAAAAAAAAAAAAAAAAAAAAAAAAA </p>
            <p> VRUM VRUM</p>
        </header>
    );
}

export default Header;