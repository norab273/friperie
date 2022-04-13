import Style from "./AppFooter.module.css";

const AppFooter = () => {

    return (
        <div className={Style.FooterContainer}>
            <div>
                <h2 className={Style.FooterTitle}>A PROPOS</h2>
                <p>Avec Fripées comme jamais, trouvez la tenue parfaite pour aller en soirée. Et de seconde main bien sûr !</p>
                <p>Notre promesse ? Vous serez la plus belle pour aller danser</p>
            </div>
            <div className={Style.CenterSection}>
                <h2 className={Style.FooterTitle}>LIVRAISONS/RETOURS</h2>
                <p>Livraison offerte en France Métropolitaine à partir de 50 € d’achat. </p>
                <p>Vous souhaitez effectuer un retour ? Vous avez jusqu’à 14 jours à partir de la date de réception de votre colis pour le faire. </p>
            </div>
            <div>
                <h2 className={Style.FooterTitle}>CONTACTEZ NOUS</h2>
                <p>hello@fripeescommejamais.com</p>
            </div>
        </div>
    );
};

export default AppFooter;