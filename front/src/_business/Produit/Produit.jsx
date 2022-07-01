import Style from "./Produit.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useProduit } from "./ProduitServiceAPI";
import { useNavigate } from "react-router-dom";
import { ManageCart } from "../cartInLocalStorage";
import { useEffect, useState } from "react";

const Produit = () => {
  const { id } = useParams();
  const [produit, dataLoaded] = useProduit(id);
  
  const navigate = useNavigate();
  
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  
    
  const addItem = ()  => {

    let item = produit;

    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];
    
    //assuming we have an ID field in our item
    //let { id } = item; est-ce que ça se corrige ?
    let id = item[0].id;
    console.log(id);
    
    //look for item in cart array
    let existingItem = cartCopy.find(cartItem => cartItem[0].id === id);
    console.log(cartCopy);
    
    //if item already exists
    if (existingItem) {
        console.log("item has already been added to cart") //update item
    } else { //if item doesn't exist, simply add it
        cartCopy.push(item)
    }
    
    //update app state
    setCart(cartCopy)
    
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);

    getBackToPageAll()

  }

  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart)
    
  }, [])

  function getBackToPageAll() {
    navigate(`/tout`)
    window.scrollTo(0, 0);
  }

  if (!dataLoaded) {
    return <div>Chargement en cours...</div>;
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
        <button className={Style.Button} onClick={addItem}>
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
