import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__container">
        <li className="footer__container--item">Contact</li>
        <li className="footer__container--item">Blog</li>
        <li className="footer__container--item">About us</li>
      </ul>

      <div className="footer__socialmedia">
        <h5 className="footer__socialmedia--title">Follow us:</h5>
        <a
          href="https://github.com/LaiaRuizM"
          title="Twitter of Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://github.com/LaiaRuizM"
          title="Instagram of Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon  fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://github.com/LaiaRuizM"
          title="Tiktok of Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon fa-brands fa-tiktok"></i>
        </a>
        <a
          href="https://linkedin.com/in/laia-ruiz-martínez"
          title="Facebook of Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://github.com/LaiaRuizM"
          title="GitHub of Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/laia-ruiz-martínez"
          target="_blank"
          title="Linkedin de Laia Ruiz Martínez"
          rel="noopener noreferrer">
          <i className="footer__socialmedia--icon fa-brands fa-linkedin"></i>
        </a>
      </div>

      <small className="footer__text">
        Made with 💙 by &copy;Laia Ruiz Martínez
      </small>
    </footer>
  );
};

export default Footer;
