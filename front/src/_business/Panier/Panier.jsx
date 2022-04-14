import PanierCard from "../../_common/card/PanierCard";
// import Pagination, { COLOR_COUPS_DE_POUCE } from "_common/component/pagination/Pagination";
// import { resolvePath, ROUTE_COUPS_DE_POUCE_PAGE } from "_core/router/routes";
// import {useParams, useHistory } from "react-router-dom";
import Style from "./Panier.module.css";
import robe1 from "../../_common/photos/robe1.jpg"
import robe2 from "../../_common/photos/robe2.jpg"
import robe3 from "../../_common/photos/robe3.jpg"
import robe4 from "../../_common/photos/robe4.jpg"
import { Link } from "react-router-dom";

const Panier = () => {
  const panier = [
    {
      id: 45,
      nom: "robe noire",
      prix: 7,
      photo: robe1
    },
    {
      id: 46,
      nom: "robe longue",
      prix: 7,
      photo: robe2
    },
    {
      id: 47,
      nom: "robe orange",
      prix: 7,
      photo: robe3
    },
    {
      id: 48,
      nom: "robe face",
      prix: 7,
      photo: robe4
    },
  ]
  return (
    <div>
      <h1 className={Style.Title}>Panier</h1>
      <div className={Style.MainContainer}>
        <div className={Style.CardsContainer}>
          <Link className={Style.Link} to="/"> Continuer mes achats</Link>
          {panier.map(
            ({ id, nom, prix, photo }) => {
              return (
                <PanierCard
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
        <div className={Style.TotalContainer}>
          <div className={Style.TextContainer}>
            <p className={Style.Text}>Produits</p> <span className={Style.Text}> 45 €</span>
          </div>
          <div className={Style.TextContainer}>
            <p className={Style.Text}>Livraison</p> <span className={Style.Text}> 5 €</span>
          </div>
          <div className={Style.TotalTextContainer}>
            <p className={Style.Total}>Total</p> <span className={Style.Total}> 50 €</span>
          </div>
          <div className={Style.ButtonContainer}>
            <Link className={Style.Button} to="/confirmation"> Valider mes achats</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Panier;