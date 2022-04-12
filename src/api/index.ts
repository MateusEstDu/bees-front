import axios, { AxiosInstance } from "axios";

const apiBreweryRoot = axios.create({
    baseURL: "https://api.openbrewerydb.org"
})

const fetch = () => {
    return apiBreweryRoot.get("/breweries");
};
const fetchPage = (pageNumber: number) => {
    return apiBreweryRoot.get(
        "/breweries",
        {
            params: {
                page: pageNumber,
                per_page: 6
            }    
        }
    );
}

export default {
    fetch,
    fetchPage
}
