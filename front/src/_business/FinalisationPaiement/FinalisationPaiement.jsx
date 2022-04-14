import Style from "./FinalisationPaiement.module.css";


function FinalisationPaiement() {
    return (
        <div className={Style.App}>
            <h1>Votre commande a bien été enregistrée</h1>
            <p>Total : 50 euros</p>
            <p>Numéro de commande : 01</p>
        </div>
    );
}

export default FinalisationPaiement;
