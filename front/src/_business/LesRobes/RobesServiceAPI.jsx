import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCatalogueRobes = async () => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/catalogue/robes
    `);
    return response;
}

export const useCatalogueRobes = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCatalogueRobes().then((items) => {
            setCatalogue(items);
            setDataLoaded(true);
        });
    }, []);

    return [catalogue, dataLoaded];
};
