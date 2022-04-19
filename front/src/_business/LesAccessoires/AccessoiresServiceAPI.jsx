import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCatalogue = async () => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/catalogue/accessoires`);
    return response;
}

export const useCatalogue = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCatalogue().then((items) => {
            setCatalogue(items);
            setDataLoaded(true);
        });
    }, []);

    return [catalogue, dataLoaded];
};
