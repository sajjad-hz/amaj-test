import Logo from "./Logo";
import Menu from "./Menu";
import Button from '../../../utils/Button'
import SearchIcon from "../../assets/icons/Search.png";
import QuestionIcon from "../../assets/icons/question.png";
import NotiIcon from "../../assets/icons/Notification.png";
import ProfileIcon from "../../assets/icons/profile.png";

const Header = () => {
  return (
    <header>
      <Logo />
      <Menu />
      <div className="header-options">
        <img src={SearchIcon} alt="search icon" />
        <img src={QuestionIcon} alt="question icon" />
        <img src={NotiIcon} alt="noti icon" />
        <img src={ProfileIcon} alt="profile icon" />
      </div>
      <Button className='btn-med' >GO TO MARKETPLACE</Button>
    </header>
  );
};

export default Header;
