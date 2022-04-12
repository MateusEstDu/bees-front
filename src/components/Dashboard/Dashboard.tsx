import { useContext, useEffect, useState } from 'react';
import api from '../../api';
import { UserContext } from '../../contexts/UserContext';
import BreweriesList from './BreweriesList';
import Header from './Header';

function Dashboard() {

    return(
        <div>
            <Header />
            <p> Aqui vai uma lista de coisas!!</p>
            <BreweriesList />
        </div>
    );
}

export default Dashboard;