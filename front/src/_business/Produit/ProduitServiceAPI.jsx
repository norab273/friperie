import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";


export const getProduit = async (id) => {
    const response = await get(process.env.REACT_APP_API_URL + `/api/product/${id}`);
    return response;
}

export const useProduit = (id) => {
    const [produit, setProduit] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const loadDetail = async () => {
            const produit = await getProduit(id);
            setProduit(produit);
            setDataLoaded(true);
            window.scrollTo(0, 0)
        }
        id && loadDetail();
    }, [id])
    return [produit, dataLoaded];
};


// export const useProduit = (id) => {
//     const [produit, setProduit] = useState([]);
//     const [dataLoaded, setDataLoaded] = useState(false);

//     useEffect(() => {
//         getProduit(id).then((items) => {
//             setProduit(items);
//             setDataLoaded(true);
//         });
//     }, [id]);

//     console.log("produit", produit)

//     return [produit, dataLoaded];
// };
