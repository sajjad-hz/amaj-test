import HomeTop from './HomeTop';
import Button from "../../../utils/Button";
import homePic from "../../assets/pictures/home-pic.png";
import CalenderIcon from '../../assets/icons/Calendar.png'
import './index.scss'

const Home = () => {
  return (
    <section className='home-section'>
      <div className="home">
<HomeTop/>

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
