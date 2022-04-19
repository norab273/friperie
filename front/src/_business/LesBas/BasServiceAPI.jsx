import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCatalogueBas = async () => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/catalogue/bas`);
    return response;
}

export const useCatalogueBas = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCatalogueBas().then((items) => {
            setCatalogue(items);
            setDataLoaded(true);
        });
    }, []);

    return [catalogue, dataLoaded];
};
