import { Link } from "react-router-dom";
import "./header.scss";
import search from "../../../public/search.svg";
import app from "../../../public/app.svg";
import expand from "../../../public/expand.svg";
import notifications from "../../../public/notifications.svg";
import userPic from "../../../public/user.jpg";
import settings from "../../../public/settings.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-area">
        <Link className="logo" to="/">
          ReactAdmin
        </Link>
      </div>
      <div className="icons-area">
        <img src={search} alt="icon" />
        <img src={app} alt="icon" />
        <img src={expand} alt="icon" />
        <div className="notification">
          <img src={notifications} alt="icon" />
          <span>1</span>
        </div>
        <Link className="user" to="/">
          <img src={userPic} alt="img" />
          <span>AbuHasan</span>
        </Link>
        <img src={settings} alt="icon" />
      </div>
    </div>
  );
};

export default Header;
