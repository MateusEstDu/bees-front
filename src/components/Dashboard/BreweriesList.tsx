import { useEffect, useState } from 'react';
import api from '../../api';
import BreweryItem from './BreweryItem';
import './css/BreweriesList.css'

export interface IBrewery {
    id: string,
    name: string,
    brewery_type: string,
    street: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    county_province: string,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    updated_at: Date,
    created_at: Date
}

function BreweriesList() {
    const [ breweries, setBreweries ] = useState<IBrewery[]>();

    useEffect(() => {
        (async function fetchBreweries() {
            try{
                const response = await api.fetch();
                setBreweries(response.data);
            } catch (err) {
                console.log(err)
            }
        })();
    }, []);

    const handleDelete = (breweryKey: string) => {
        setBreweries(breweries?.filter(b => b.id !== breweryKey));
    }

    function renderBreweries(breweries: IBrewery[]){
        if(breweries.length) {
            return breweries.map((brewery: IBrewery) => {
                return (
                    <BreweryItem brewery={brewery} key={brewery.id} handleDelete={handleDelete} />
                );
            });
        }
    }

    return(
        <div className='content'>
            {
                breweries?.length ? renderBreweries(breweries) : "There are no breweries!"
            }
        </div>
    );
}

export default BreweriesList;