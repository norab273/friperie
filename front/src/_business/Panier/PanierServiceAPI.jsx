import { get } from "../../_common/service/ApiService";
import { useEffect, useState } from "react";

export const getCartInfo = async () => {
  const response = await get(process.env.REACT_APP_API_URL + `/api/cart`);
  return response;
};

export const useCartInfo = () => {
  const [cartInfo, setCartInfo] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getCartInfo().then((items) => {
      setCartInfo(items);
      setDataLoaded(true);
    });
  }, []);

  return [cartInfo, dataLoaded];
};