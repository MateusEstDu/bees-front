import { useContext, useEffect, useState } from 'react';
import api from '../../api';
import { UserContext } from '../../contexts/UserContext';
import BreweriesList from './BreweriesList';
import Header from './Header';

function Dashboard() {

    return(
        <>
        <Header />
        <main>
            <BreweriesList />
        </main>
        </>
    );
}

export default Dashboard;