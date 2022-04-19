import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getNouveautes = async () => {
    const response = await get(process.env.REACT_APP_API_URL + "/api/nouveautes");

    return response;
}

export const useNouveautes = () => {
    const [nouveautes, setNouveautes] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getNouveautes().then((items) => {
            setNouveautes(items);
            setDataLoaded(true);
        });
    }, []);

    return [nouveautes, dataLoaded];
};
