import VetementCard from "../../_common/card/VetementCard";
import Style from "../Catalogue.module.css";
import { useCatalogueTout } from "../Tout/ToutServiceAPI"


const Tout = () => {
  const [catalogueTout, dataLoaded] = useCatalogueTout();


  return (
    <div >
      {!dataLoaded && <p>Chargement en cours...</p>}

      <h1 className={Style.Title}>Tous nos produits</h1>
      <div className={Style.CardsContainer}>
        {catalogueTout.map(
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
      {/* {last > 1 && <Pagination colorEnum={COLOR_COUPS_DE_POUCE} currentPage={currentPage} last={last} changePage={handleChangePage} />} */}
    </div>
  );
};

export default Tout;