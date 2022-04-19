import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useCatalogueBas } from "../LesBas/BasServiceAPI";

const LesBas = () => {
  const [catalogueBas, dataLoaded] = useCatalogueBas();

  return (
    <div>
      {!dataLoaded && <p>Chargement en cours...</p>}

      <h1 className={Style.Title}>Les Bas</h1>
      <div className={Style.CardsContainer}>
        {catalogueBas.map(
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

export default LesBas;
