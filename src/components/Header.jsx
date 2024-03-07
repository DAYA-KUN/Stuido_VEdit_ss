import "./Header.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className='logo' />
        <button className="button">Export</button>
      </div>
    </div>
  );
};

export default Header;
