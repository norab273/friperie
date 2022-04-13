import VetementCard from "../../_common/card/VetementCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "../Catalogue.module.css";
import React, { useEffect } from "react";
import haut1 from "../../_common/photos/haut1.jpg"
import haut2 from "../../_common/photos/haut2.jpg"
import haut3 from "../../_common/photos/haut3.jpg"
import haut4 from "../../_common/photos/haut4.jpg"
import haut5 from "../../_common/photos/haut5.jpg"
import haut6 from "../../_common/photos/haut6.jpg"
import haut7 from "../../_common/photos/haut7.jpg"
import haut8 from "../../_common/photos/haut8.jpg"
import haut9 from "../../_common/photos/haut9.jpg"
import haut10 from "../../_common/photos/haut10.jpg"
import haut11 from "../../_common/photos/haut11.jpg"
import haut12 from "../../_common/photos/haut12.jpg"
import haut13 from "../../_common/photos/haut13.jpg"
import haut14 from "../../_common/photos/haut14.jpg"
import haut15 from "../../_common/photos/haut15.jpg"
import haut16 from "../../_common/photos/haut16.jpg"
import haut17 from "../../_common/photos/haut17.jpg"
import haut18 from "../../_common/photos/haut18.jpg"
import haut19 from "../../_common/photos/haut19.jpg"

const LesHauts = () => {
//     const history = useHistory();
//   const { pagenum } = useParams();
//   const currentPage = parseInt(pagenum || 1, 10);
//   const [{ tout, total, limit }] = useListeTout(currentPage);
//   const last = Math.ceil(total / limit);
  const hauts = [
    {
      id:26,
      nom: "t-shirt",
      prix: 7,
      photo: haut1
    },
    {
      id:27,
      nom: "veste jaune",
      prix: 7,
      photo: haut2
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
      id:30,
      nom: "t-shirt Bowie",
      prix: 7,
      photo: haut5
    },
    {
      id:31,
      nom: "veste orange",
      prix: 7,
      photo: haut6
    },
    {
      id:32,
      nom: "haut rose",
      prix: 7,
      photo: haut7
    },
    {
      id:33,
      nom: "haut noir",
      prix: 7,
      photo: haut8
    },
    {
      id:34,
      nom: "veste longue",
      prix: 7,
      photo: haut9
    },
    {
      id:35,
      nom: "t-shirt noir",
      prix: 7,
      photo: haut10
    },
    {
      id:36,
      nom: "t-shirt rouge",
      prix: 7,
      photo: haut11
    },
    {
      id:37,
      nom: "top jaune",
      prix: 7,
      photo: haut12
    },
    {
      id:38,
      nom: "veste verte",
      prix: 7,
      photo: haut13
    },
    {
      id:39,
      nom: "crop top",
      prix: 7,
      photo: haut14
    },
    {
      id:40,
      nom: "haut en cuir",
      prix: 7,
      photo: haut15
    },
    {
      id:41,
      nom: "haut rose",
      prix: 7,
      photo: haut16
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
      id:44,
      nom: "t-shirt faces",
      prix: 7,
      photo: haut19
    },
  ]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [currentPage])

//   const handleChangePage = (page) => { history.push(resolvePath(ROUTE_COUPS_DE_POUCE_PAGE, { pagenum: page })) };

    return (
        <div>
            <h1 className={Style.Title}>Les Hauts</h1>
            <div className={Style.CardsContainer}>
                {hauts.map(
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

export default LesHauts;