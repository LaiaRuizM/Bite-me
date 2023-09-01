import "../styles/Header.scss";
import logo from "../imagesVideos/biteMeLogo.jpeg";
const Header = () => {
  return (
    <header className="header">
      <img className="header--logo" src={logo} alt={logo}></img>
      <h2 className="header--title">Bite me in Welkhomeclub</h2>
      <h3 className="header--subtitle">Do you want to taste and bite it?</h3>
      <label className="header--searcher" htmlFor="search">
        <i className="header__finder--icon fa-solid fa-magnifying-glass"></i>
        <input
          className="header--searcher__input"
          type="text"
          placeholder="What are going to taste today? Let's see!"
          value={""}
        />
      </label>
    </header>
  );
};

export default Header;
