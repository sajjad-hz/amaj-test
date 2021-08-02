import Button from "../../../utils/Button";
import homePic from "../../assets/pictures/home-pic.png";
import CalenderIcon from '../../assets/icons/Calendar.png'

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home-top">
          <div className="home-top_left">
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
            <Button className="btn-med">GO TO MARKETPLACE</Button>
          </div>
          <div className="home-top_right">
            <img src={homePic} alt="" />
          </div>
        </div>

        <div className="home-bottom">
            <div className="home-cal">
                <h4>The Premier Marketplace for Dates</h4>
                <ul>
                    <li className="home-cal__items">Sport</li>
                    <li className="home-cal__items">Art</li>
                    <li className="home-cal__items">History</li>
                    <li className="home-cal__items">Personal</li>
                </ul>
                <div className="home-cal__icon">
                    <img src={CalenderIcon} alt="cal icon" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
