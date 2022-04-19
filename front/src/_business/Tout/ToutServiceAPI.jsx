import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCatalogueTout = async () => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/tout`);
    return response;
}

export const useCatalogueTout = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCatalogueTout().then((items) => {
            setCatalogue(items);
            setDataLoaded(true);
        });
    }, []);

    return [catalogue, dataLoaded];
};
