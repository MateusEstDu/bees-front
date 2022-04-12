import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Header from './Header';

function Dashboard() {
    const { user } = useContext(UserContext);

    return(
        <div>
            <Header />
            <p> Aqui vai uma lista de coisas!!</p>
        </div>
    );
}

export default Dashboard;