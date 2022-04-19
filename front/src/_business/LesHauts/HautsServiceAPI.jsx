import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCatalogueHauts = async () => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/catalogue/hauts`);
    return response;
}

export const useCatalogueHauts = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCatalogueHauts().then((items) => {
            setCatalogue(items);
            setDataLoaded(true);
        });
    }, []);

    return [catalogue, dataLoaded];
};
