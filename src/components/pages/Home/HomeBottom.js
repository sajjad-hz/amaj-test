import CalenderIcon from "../../assets/icons/Calendar.png";
import "./HomeBottom.scss";

const HomeBottom = () => {
  return (
    <div className="home-bottom">
      <h3>The Premier Marketplace for Dates</h3>
      <div className="home-cal">
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
  );
};

export default HomeBottom;
