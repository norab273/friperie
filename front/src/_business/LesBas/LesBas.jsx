import VetementCard from "../../_common/card/VetementCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "../Catalogue.module.css";
import React, { useEffect } from "react";
import bas1 from "../../_common/photos/bas1.png"
import bas2 from "../../_common/photos/bas2.jpg"
import bas3 from "../../_common/photos/bas3.jpg"
import bas4 from "../../_common/photos/bas4.jpg"
import bas5 from "../../_common/photos/bas5.jpg"
import bas6 from "../../_common/photos/bas6.jpg"
import bas7 from "../../_common/photos/bas7.jpg"
import bas8 from "../../_common/photos/bas8.jpg"
import bas9 from "../../_common/photos/bas9.jpg"


const LesBas = () => {
//     const history = useHistory();
//   const { pagenum } = useParams();
//   const currentPage = parseInt(pagenum || 1, 10);
//   const [{ tout, total, limit }] = useListeTout(currentPage);
//   const last = Math.ceil(total / limit);
  const bas = [
      
    {
      id:17,
      nom: "pantalon blanc",
      prix: 32,
      photo: bas1
    },
    {
      id:18,
      nom: "pantalon cuir",
      prix: 22,
      photo: bas2
    },
    {
      id:19,
      nom: "pantalon jaune à carreaux",
      prix: 7,
      photo: bas3
    },
    {
      id:20,
      nom: "pantalon jaune",
      prix: 12,
      photo: bas4
    },
    {
      id:21,
      nom: "pantalon bicolore",
      prix: 17,
      photo: bas5
    },
    {
      id:22,
      nom: "salopette à carreaux",
      prix: 15,
      photo: bas6
    },
    {
      id:23,
      nom: "jupe rouge",
      prix: 7,
      photo: bas7
    },
    {
      id:24,
      nom: "patalon léopard",
      prix: 15,
      photo: bas8
    },
    {
      id:25,
      nom: "jupe à pois",
      prix: 13,
      photo: bas9
    },
   
  ]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [currentPage])

//   const handleChangePage = (page) => { history.push(resolvePath(ROUTE_COUPS_DE_POUCE_PAGE, { pagenum: page })) };

    return (
        <div>
            <h1 className={Style.Title}>Les Bas</h1>
            <div className={Style.CardsContainer}>
                {bas.map(
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

export default LesBas;
