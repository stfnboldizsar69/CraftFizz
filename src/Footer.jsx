import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id = "footer" className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/i.am.spunk">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100074885733681">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="https://www.twitter.com/elonmusk">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
