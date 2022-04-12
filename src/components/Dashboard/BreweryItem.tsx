import { IBrewery } from "./BreweriesList";

interface IProps {
    brewery: IBrewery
}

function BreweryItem({brewery}:IProps){

    return (
        <div>
            {brewery.id}
            {brewery.name}
            {brewery.brewery_type}
            {brewery.street}
            {brewery.address_2}
            {brewery.address_3}
            {brewery.city}
            {brewery.state}
            {brewery.county_province}
            {brewery.postal_code}
            {brewery.country}
            {brewery.longitude}
            {brewery.latitude}
            {brewery.phone}
            {brewery.website_url}
            {brewery.updated_at}
            {brewery.created_at}
        </div>
    );
}

export default BreweryItem;