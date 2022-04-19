import Style from "./VetementCard.module.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const VetementCard = ({ id, name, price, photo }) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/produit/${id}`)
        window.scrollTo(0, 0);
    }

    return (
        <div className={Style.Card} onClick={handleCardClick}>
            <div className={Style.CardUpper}>
                <img src={photo} className={Style.photo} alt="" />
            </div>
            <div className={Style.CardLower}>
                <p className={Style.Nom}>{name}</p>
                <p className={Style.Prix}>{price} €</p>
            </div>
        </div>
    );
};

VetementCard.propTypes = {
    id: PropTypes.number.isRequired,
    nom: PropTypes.string,
    prix: PropTypes.number,
};

export default VetementCard;
