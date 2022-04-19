import Style from "./HomePage.module.css";
import homepage from '../../_common/photos/homepage.jpg'
import LesAccessoires from '../../_common/photos/LesAccessoires.png'
import LesBas from '../../_common/photos/LesBas.png'
import LesHauts from '../../_common/photos/LesHauts.png'
import LesNouveautes from '../../_common/photos/LesNouveautes.png'
import LesRobes from '../../_common/photos/LesRobes.png'
import Tout from '../../_common/photos/Tout.png'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={Style.App}>
      <div className={Style.photoContainer}>
        <img className={Style.photo} src={homepage} alt="" />
      </div>
      <div className={Style.coupsDeCoeurContainer}>
        <p className={Style.coupsDeCoeur}> Nos Coups De Coeur</p>
      </div>
      <div className={Style.categoriesGrid}>
        <Link className={Style.Link} to="/tout">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={Tout} alt=""></img>
            <p>Tout</p>
          </div>
        </Link>
        <Link className={Style.Link} to="/nouveautes">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={LesNouveautes} alt=""></img>
            <p>Les Nouveautés</p>
          </div>
        </Link>
        <Link className={Style.Link} to="/catalogue/hauts">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={LesHauts} alt=""></img>
            <p>Les Hauts</p>
          </div>
        </Link>
        <Link className={Style.Link} to="/catalogue/bas">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={LesBas} alt=""></img>
            <p>Les Bas</p>
          </div>
        </Link>
        <Link className={Style.Link} to="/catalogue/robes">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={LesRobes} alt=""></img>
            <p>Les Robes</p>
          </div>
        </Link>
        <Link className={Style.Link} to="/catalogue/accessoires">
          <div className={Style.categoryContainer}>
            <img className={Style.photoCategory} src={LesAccessoires} alt=""></img>
            <p>Les Accessoires</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
