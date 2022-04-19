import Style from "./VetementCard.module.css";
// import { Link, useHistory } from "react-router-dom";
// import { resolvePath, ROUTE_COUP_DE_POUCE_DETAIL } from "_core/router/routes";
import PropTypes from "prop-types";

const VetementCard = ({ id, nom, prix, photo }) => {
    // const history = useHistory();

    const handleCardClick = () => {
            // let url = resolvePath(ROUTE_COUP_DE_POUCE_DETAIL, { id });
            // history.push(url);
            // window.scrollTo(0, 0);
            console.log("carte cliquée")
    }

    // function goUpThePage() {
    //     window.scrollTo(0, 0);
    // }

    return (
        <div className={Style.Card} onClick={handleCardClick}>
            <div className={Style.CardUpper}>
                    <img src={photo} className={Style.photo} alt="" /> 
            </div>
            <div className={Style.CardLower}>
                    <p className={Style.Nom}>{nom}</p>
                    <p className={Style.Prix}>{prix} €</p>
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
