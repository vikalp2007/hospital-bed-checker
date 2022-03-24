import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <h4>Some Text</h4>
      </div>
      <div className="midFooter">
        <h1>Find Hospital.</h1>
        <p>High Quality is our first priority</p>
        <small>
          <em>Copyrights 2021 &copy;KeshavPareek</em>{" "}
        </small>
      </div>
      <div className="rightFooter">
        <a href="shit.com">
          <Instagram />
          &nbsp; Instagram
        </a>
        <a href="shit.com">
          <YouTube />
          &nbsp; Youtube
        </a>
        <a href="shit.com">
          <Facebook />
          &nbsp; Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
