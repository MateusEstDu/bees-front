import { useEffect, useState } from 'react';
import api from '../../api';
import BreweryItem from './BreweryItem';

export interface IBrewery{
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
    const [ loading, setLoading ] = useState<boolean>();
    const [ breweries, setBreweries ] = useState<[IBrewery]>();

    useEffect(() => {
        (async function fetchBreweries() {
            try{
                setLoading(true);
                const response = await api.fetch();
                setBreweries(response.data)
                setLoading(false);
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        })();
    }, []);

    function renderBreweries(breweries: [IBrewery]){
        if(breweries.length) {
            return breweries.map((brewery: IBrewery) => {
                return (
                    <BreweryItem brewery={brewery}/>
                );
            });
        }
    }

    /*useEffect(() => {
        breweries?.map((brewery: IBrewery) => {
            console.log(brewery)
        })
    }, [breweries]);*/

    return(
        <div>
            <p>
            {
                loading ? "Carregando!" : breweries?.length ? renderBreweries(breweries) : "This are not the breweris you're looking for"
            }
            </p>
        </div>
    );
}

export default BreweriesList;