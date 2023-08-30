import "../styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <h2 className="header--title">Bite me in Welkhomeclub</h2>
      <h3 className="header--subtitle">Do you want to taste and bite it?</h3>
      <label className="header--searcher" htmlFor="search">
        <input className="header--searcher__input" type="text" placeholder="" />
      </label>
    </header>
  );
};

export default Header;
