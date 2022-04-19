import React, { useState, useEffect } from "react";
import Style from "./AppHeader.module.css";
import { Link } from "react-router-dom";


const AppHeader = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive((isActive) => !isActive);
    };

    const [nombreItemsPanier, setNombreItemsPanier] = useState(4);
    const [displayPanier, setDisplayPanier] = useState(false);

    useEffect(() => {
        if (nombreItemsPanier > 0) {
            setDisplayPanier(true)
        } else {
            setDisplayPanier(false)
        }
    }, [nombreItemsPanier])


    return (
        <div>
            <div className={Style.HeaderContainer}>
                <Link className={Style.TitleLink} to="/">
                <h1 className={Style.Title}>Fripées comme jamais</h1>
                </Link>
                <nav className={Style.HeaderMenu}>
                    <p className={Style.Catalogue} onClick={handleMenuClick}>Catalogue</p>
                    <Link className={Style.PanierLink} to="/panier"><p className={Style.Panier}>Panier</p>{displayPanier && <p className={Style.ItemsPanier}>({nombreItemsPanier})</p>}</Link>
                </nav>
            </div>
            {isActive && <div className={Style.SecondaryMenu}>
                <Link className={Style.Link} to="/tout">Tout</Link>
                <Link className={Style.Link} to="/nouveautes">Les Nouveautés</Link>
                <Link className={Style.Link} to="/hauts">Les Hauts</Link>
                <Link className={Style.Link} to="/bas">Les Bas</Link>
                <Link className={Style.Link} to="/robes">Les Robes</Link>
                <Link className={Style.Link} to="/accessoires">Les Accessoires</Link>
            </div>}
        </div>
    );
};

export default AppHeader;
