import VetementCard from "../../_common/card/VetementCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "../Catalogue.module.css";
import React, { useEffect } from "react";
import accessoire1 from "../../_common/photos/accessoire1.jpg"
import accessoire2 from "../../_common/photos/accessoire2.jpg"
import accessoire3 from "../../_common/photos/accessoire3.jpg"
import accessoire4 from "../../_common/photos/accessoire4.jpg"
import accessoire5 from "../../_common/photos/accessoire5.jpg"
import accessoire6 from "../../_common/photos/accessoire6.jpg"
import accessoire7 from "../../_common/photos/accessoire7.jpg"
import accessoire8 from "../../_common/photos/accessoire8.jpg"
import accessoire9 from "../../_common/photos/accessoire9.jpg"
import accessoire10 from "../../_common/photos/accessoire10.png"
import accessoire11 from "../../_common/photos/accessoire11.jpg"
import accessoire12 from "../../_common/photos/accessoire12.jpg"
import accessoire13 from "../../_common/photos/accessoire13.jpg"
import accessoire14 from "../../_common/photos/accessoire14.jpg"
import accessoire15 from "../../_common/photos/accessoire15.jpg"
import accessoire16 from "../../_common/photos/accessoire16.jpg"

const LesAccessoires = () => {
//     const history = useHistory();
//   const { pagenum } = useParams();
//   const currentPage = parseInt(pagenum || 1, 10);
//   const [{ tout, total, limit }] = useListeTout(currentPage);
//   const last = Math.ceil(total / limit);
  const accessoires = [
      {
          id : 1,
          nom: "collier doré",
          prix : 12,
          photo : accessoire1

      },
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
      id:4,
      nom: "casquette",
      prix: 7,
      photo: accessoire4
    },
    {
      id:5,
      nom: "beret à pois",
      prix: 9,
      photo: accessoire5
    },
    {
      id:6,
      nom: "lunettes de soleil",
      prix: 7,
      photo: accessoire6
    },
    {
      id:7,
      nom: "montre rose",
      prix: 18,
      photo: accessoire7
    },
    {
      id:8,
      nom: "casquette glace",
      prix: 22,
      photo: accessoire8
    },
    {
      id:9,
      nom: "pochette rouge",
      prix: 7,
      photo: accessoire9
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
      id:12,
      nom: "beret rouge",
      prix: 34,
      photo: accessoire12
    },
    {
      id:13,
      nom: "paillettes",
      prix: 7,
      photo: accessoire13
    },
    {
      id:14,
      nom: "foulard",
      prix: 7,
      photo: accessoire14
    },
    {
      id:15,
      nom: "chaussures roses",
      prix: 4,
      photo: accessoire15
    },
    {
      id:16,
      nom: "lunettes",
      prix: 7,
      photo: accessoire16
    },
  ]

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [currentPage])

//   const handleChangePage = (page) => { history.push(resolvePath(ROUTE_COUPS_DE_POUCE_PAGE, { pagenum: page })) };

    return (
        <div>
            <h1 className={Style.Title}>Les Accessoires</h1>
            <div className={Style.CardsContainer}>
                {accessoires.map(
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

export default LesAccessoires;
;
