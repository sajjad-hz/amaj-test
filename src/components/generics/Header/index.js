import Logo from "./Logo";
import Menu from "./Menu";
import SearchIcon from "../../assets/icons/Search.png";
import QuestionIcon from "../../assets/icons/question.png";
import NotiIcon from "../../assets/icons/Notification.png";
import ProfileIcon from "../../assets/icons/profile.png";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-main">
        <Logo />
        <div className="header-right">
          <Menu />
          <div className="header-options">
            <img src={SearchIcon} alt="search icon" />
            <img src={QuestionIcon} alt="question icon" />
            <img src={NotiIcon} alt="noti icon" />
            <img src={ProfileIcon} alt="profile icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
