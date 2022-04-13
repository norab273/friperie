import VetementCard from "../../_common/card/VetementCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "../Catalogue.module.css";
import React, { useEffect } from "react";
import accessoire2 from "../../_common/photos/accessoire2.jpg"
import accessoire3 from "../../_common/photos/accessoire3.jpg"
import accessoire5 from "../../_common/photos/accessoire5.jpg"
import accessoire10 from "../../_common/photos/accessoire10.png"
import accessoire11 from "../../_common/photos/accessoire11.jpg"
import bas3 from "../../_common/photos/bas3.jpg"
import bas6 from "../../_common/photos/bas6.jpg"
import bas7 from "../../_common/photos/bas7.jpg"
import haut3 from "../../_common/photos/haut3.jpg"
import haut4 from "../../_common/photos/haut4.jpg"
import haut17 from "../../_common/photos/haut17.jpg"
import haut18 from "../../_common/photos/haut18.jpg"
import robe3 from "../../_common/photos/robe3.jpg"
import robe4 from "../../_common/photos/robe4.jpg"
import robe5 from "../../_common/photos/robe5.jpg"

const LesNouveautes = () => {
//     const history = useHistory();
//   const { pagenum } = useParams();
//   const currentPage = parseInt(pagenum || 1, 10);
//   const [{ tout, total, limit }] = useListeTout(currentPage);
//   const last = Math.ceil(total / limit);
  const nouveautes = [
      {
          id:2,
          nom: "lunettes jaunes",
          prix: 18,
          photo: accessoire2
      },
      {
        id:3,
        nom: "lunettes de soleil",
        prix: 17,
        photo: accessoire3
    },
    {
      id:5,
      nom: "beret à pois",
      prix: 9,
      photo: accessoire5
    },
    {
      id:10,
      nom: "sac en cuir",
      prix: 12,
      photo: accessoire10
    },
    {
      id:11,
      nom: "chaussures à talons",
      prix: 28,
      photo: accessoire11
    },
    {
      id:19,
      nom: "pantalon jaune à carreaux",
      prix: 7,
      photo: bas3
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
      id:28,
      nom: "haut jaune",
      prix: 7,
      photo: haut3
    },
    {
      id:29,
      nom: "tailleur noir à sequins",
      prix: 7,
      photo: haut4
    },
    {
      id:42,
      nom: "crop top noir",
      prix: 7,
      photo: haut17
    },
    {
      id:43,
      nom: "t-shirt wild",
      prix: 7,
      photo: haut18
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
  ]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [currentPage])

//   const handleChangePage = (page) => { history.push(resolvePath(ROUTE_COUPS_DE_POUCE_PAGE, { pagenum: page })) };

    return (
        <div>
            <h1 className={Style.Title}>Les Nouveautés</h1>
            <div className={Style.CardsContainer}>
                {nouveautes.map(
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

export default LesNouveautes;
