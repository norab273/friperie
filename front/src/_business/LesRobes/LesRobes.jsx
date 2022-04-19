import VetementCard from "../../_common/card/VetementCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "../Catalogue.module.css";
import React, { useEffect } from "react";
import robe1 from "../../_common/photos/robe1.jpg"
import robe2 from "../../_common/photos/robe2.jpg"
import robe3 from "../../_common/photos/robe3.jpg"
import robe4 from "../../_common/photos/robe4.jpg"
import robe5 from "../../_common/photos/robe5.jpg"
import robe6 from "../../_common/photos/robe6.jpg"
import robe7 from "../../_common/photos/robe7.jpg"

const LesRobes = () => {
//     const history = useHistory();
//   const { pagenum } = useParams();
//   const currentPage = parseInt(pagenum || 1, 10);
//   const [{ tout, total, limit }] = useListeTout(currentPage);
//   const last = Math.ceil(total / limit);
  const robes = [
    {
      id:45,
      nom: "robe noire",
      prix: 7,
      photo: robe1
    },
    {
      id:46,
      nom: "robe longue",
      prix: 7,
      photo: robe2
    },
    {
      id:47,
      nom: "robe orange",
      prix: 7,
      photo: robe3
    },
    {
      id:48,
      nom: "robe face",
      prix: 7,
      photo: robe4
    },
    {
      id:49,
      nom: "robe blanche",
      prix: 7,
      photo: robe5
    },
    {
      id:50,
      nom: "robe rose",
      prix: 7,
      photo: robe6
    },
    {
      id:51,
      nom: "robe rouge",
      prix: 7,
      photo: robe7
    },
  ]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [currentPage])

//   const handleChangePage = (page) => { history.push(resolvePath(ROUTE_COUPS_DE_POUCE_PAGE, { pagenum: page })) };

    return (
        <div>
            <h1 className={Style.Title}>Les Robes</h1>
            <div className={Style.CardsContainer}>
                {robes.map(
                  ({ id, nom, prix, photo }) => {
                    return (
                      <VetementCard
                        key={id}
                        id={id}
                        nom={nom}
                        prix={prix}
                        photo={photo}
                      />
                    );
                  }
                )}
              </div>
              {/* {last > 1 && <Pagination colorEnum={COLOR_COUPS_DE_POUCE} currentPage={currentPage} last={last} changePage={handleChangePage} />} */}
        </div>
    );
};

export default LesRobes;
