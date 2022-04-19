import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useCatalogueHauts } from "../LesHauts/HautsServiceAPI"

const LesHauts = () => {

  const [catalogueHauts, dataLoaded] = useCatalogueHauts();

  return (
    <div>
      {!dataLoaded && <p>Chargement en cours...</p>}
      <h1 className={Style.Title}>Les Hauts</h1>
      <div className={Style.CardsContainer}>
        {catalogueHauts.map(
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

export default LesHauts;