import { useContext, useEffect } from 'react';
import api from '../../api';
import { UserContext } from '../../contexts/UserContext';
import Header from './Header';

function Dashboard() {
    const { user } = useContext(UserContext);


    useEffect(() => {
        (async function fetchBreweries() {
            try{
                const response = await api.fetch();
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        })();
    }, []);

    return(
        <div>
            <Header />
            <p> Aqui vai uma lista de coisas!!</p>
        </div>
    );
}

export default Dashboard;