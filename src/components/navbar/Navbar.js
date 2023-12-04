import Images from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Images} alt="" />
      </div>
      <div className="navbar-button">
        <button className="btn1">HOROSCOPE</button>
        <button className="btn1">DAILY</button>
        <button className="btn1">TAROT</button>
        <button className="btn1">ARTICLE</button>
        <button className="btn1">CONTACT</button>
      </div>
    </div>
  );
};

export default Navbar;
