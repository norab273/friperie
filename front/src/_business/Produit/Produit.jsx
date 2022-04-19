import Style from "./Produit.module.css";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import haut7 from "../../_common/photos/haut7.jpg"

const Produit = () => {
    // const { id } = useParams();

    return (
        <div className={Style.Card} >
            <div className={Style.CardLeft}>
                    <img src={haut7} className={Style.Photo} alt="" /> 
            </div>
            <div className={Style.CardRight}>
                <div>
                    <p className={Style.Nom}>Haut rose</p>
                    <p className={Style.Prix}>12 €</p>
                    <p className={Style.Description}> Chemise femme fluide en tissu de couleur bleu marine à motifs fleuris dans les tons jaune, rose, bleu et vert. Coupe évasée au bas, elle est fendue au bas sur les côtés et elle a des jolis boutons tout du long au devant. A noter : certainement fait à la main, donc pièce unique. Composition : non indiquée mais synthétique</p>
                    <p className={Style.Taille}> Taille : 38 </p>
                </div>
                <button className={Style.Button}>Ajouter au panier</button>
            </div>
        </div>
    );
};

Produit.propTypes = {
    id: PropTypes.number.isRequired,
    nom: PropTypes.string,
    prix: PropTypes.number,
};

export default Produit;