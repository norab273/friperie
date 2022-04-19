import Style from "./Produit.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useProduit } from "./ProduitServiceAPI";

const Produit = () => {

    const { id } = useParams();
    const [produit, dataLoaded] = useProduit(id);

    if (!dataLoaded) {
        return <div>Chargement en cours...</div>
    }

    console.log("produit", produit)

    return (
        <div className={Style.Card} >
            <div className={Style.CardLeft}>
                <img src={produit[0].photo} className={Style.Photo} alt="" />
            </div>
            <div className={Style.CardRight}>
                <div>
                    <p className={Style.Nom}>{produit[0].name}</p>
                    <p className={Style.Prix}>{produit[0].price} €</p>
                    <p className={Style.Description}>{produit[0].description}</p>
                    <p className={Style.Taille}> Taille : {produit[0].size} </p>
                </div>
                <button className={Style.Button}>Ajouter au panier</button>
            </div>
        </div>
    );
};

Produit.propTypes = {
    id: PropTypes.number,
    nom: PropTypes.string,
    prix: PropTypes.number,
};

export default Produit;