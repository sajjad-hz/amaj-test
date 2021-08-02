import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";
import "./index.scss";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home">
        <HomeTop />
        <HomeBottom />
      </div>
    </section>
  );
};

export default Home;
