import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Header from './Header';

function Dashboard() {
    const { user } = useContext(UserContext);

    return(
        <div>
            <Header />
            <p> Dashboard {user.name}</p>
            <p>Adulto? {String(user.adult)}</p>
        </div>
    );
}

export default Dashboard;