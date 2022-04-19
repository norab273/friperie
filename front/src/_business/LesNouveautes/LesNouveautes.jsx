import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useNouveautes } from "./NouveautesServiceAPI"

const LesNouveautes = () => {

  const [nouveautes, dataLoaded] = useNouveautes();

  return (
    <div>
      {!dataLoaded && <p>Chargement en cours...</p>}
      <h1 className={Style.Title}>Les Nouveautés</h1>
      <div className={Style.CardsContainer}>
        {nouveautes.map(
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

export default LesNouveautes;
