import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useCatalogueRobes } from "../LesRobes/RobesServiceAPI"

const LesRobes = () => {

  const [catalogueRobes, dataLoaded] = useCatalogueRobes();

  return (
    <div>
      {!dataLoaded && <p>Chargement en cours...</p>}
      <h1 className={Style.Title}>Les Robes</h1>
      <div className={Style.CardsContainer}>
        {catalogueRobes.map(
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

export default LesRobes;
