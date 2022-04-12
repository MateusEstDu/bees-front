import axios, { AxiosInstance } from "axios";

const apiBreweryRoot = axios.create({
    baseURL: "https://api.openbrewerydb.org"
})

const fetch = () => {
    return apiBreweryRoot.get(
        "/breweries",
        {
            params: {
                per_page: 9
            }    
        }

    );
};

const fetchPage = (pageNumber: number) => {
    return apiBreweryRoot.get(
        "/breweries",
        {
            params: {
                page: pageNumber,
                per_page: 9
            }    
        }
    );
}

const fecthNextItem = (pageNumber: number) => {
    return apiBreweryRoot.get(
        "/breweries",
        {
            params: {
                page: pageNumber,
                per_page: 1
            }    
        }
    );
}

export default {
    fetch,
    fetchPage
}
