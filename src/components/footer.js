import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="details">
        <div className="address">
          <h2>Address</h2>
          <address>
            Jivodaya Yog Sansthan <br />
            FLAT NO. 5 South Enclave <br />
            Dakshin Puri, New Delhi
            <br />
            110062
          </address>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ul className="contactUs">
            <li>
              <FaPhoneAlt />
              <a href="tel: +919811474849">(+91)98114-74849</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:contact@jivodayyogsansthan.com">
                contact@jivodayyogsansthan.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Follow Us On</h2>
          <ul className="followLinks">
            <li>
              <a href="https://facebook.com">
                <FaFacebook color="#ADEFD1FF" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <FaInstagram color="#ADEFD1FF" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <p> © Copyright Jivodaya Yog Sansthan | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
