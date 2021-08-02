import Button from "../../../utils/Button";
import homePic from "../../assets/pictures/home-pic.png";
import './HomeTop.scss';


const HomeTop = () => {
    return (
        <div className="home-top">
          <div className="home-top__left">
            <h2>
              NFTHistory<span>.io</span>
            </h2>
            <p>
              Everybody can own a house, a car, a shoe or a business. But how
              about being the only owner of something unique? We made it
              possible to own, sell and buy dates a.k.a. any moment of human
              history from discovering America through your birthday to creating
              Bitcoin.
            </p>
            <Button size="btn-med">GO TO MARKETPLACE</Button>
          </div>
          <div className="home-top__right">
            <img src={homePic} alt="" />
          </div>
        </div>
    )
}

export default HomeTop
