import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useCatalogue } from "./AccessoiresServiceAPI";

const CoupsDeCoeur = () => {
    const [catalogue, dataLoaded] = useCatalogue();
    return (
        <div>
            {!dataLoaded && <p>Chargement en cours...</p>}
            <h1 className={Style.Title}>Nos Coups De Coeur</h1>
            <div className={Style.CardsContainer}>
                {catalogue.map(
                    ({ id, name, price, photo }) => {
                        return (
                            <VetementCard
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                photo={photo}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default CoupsDeCoeur;
;
