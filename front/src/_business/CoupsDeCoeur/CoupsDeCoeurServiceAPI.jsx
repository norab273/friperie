import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getCoupsDeCoeur = async () => {
    const response = await get(process.env.REACT_APP_API_URL + "/api/coupdecoeur");
    return response;
}

export const useCoupsDeCoeur = () => {
    const [CoupsDeCoeur, setCoupsDeCoeur] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getCoupsDeCoeur().then((items) => {
            setCoupsDeCoeur(items);
            setDataLoaded(true);
        });
    }, []);

    return [CoupsDeCoeur, dataLoaded];
};
