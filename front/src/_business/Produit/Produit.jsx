import Style from "./Produit.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useProduit, addItemToCart } from "./ProduitServiceAPI";
import { useNavigate } from "react-router-dom";

const Produit = () => {
  const { id } = useParams();
  const [produit, dataLoaded] = useProduit(id);

  const navigate = useNavigate();

  if (!dataLoaded) {
    return <div>Chargement en cours...</div>;
  }

  async function addToCart() {
    await addItemToCart(id);
    navigate(`/tout`)
    window.scrollTo(0, 0);
    console.log("add");
  }

  return (
    <div className={Style.Card}>
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
        <button className={Style.Button} onClick={addToCart}>
          Ajouter au panier
        </button>
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
