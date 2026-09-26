import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "../common/BrandLogo";
import { LinkedInIcon, YouTubeIcon } from "../common/SocialIcons";
import { footerColumns } from "../../data/webinarData";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <BrandLogo light />
          <p>Empowering HR leaders with insights, strategies and communities.</p>
          <div className="social-links" aria-label="Social media">
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon size={15} aria-hidden="true" />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTubeIcon size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <a href="mailto:help@peoplefirst.com">
            <Mail size={14} aria-hidden="true" /> help@peoplefirst.com
          </a>
          <a href="tel:+911234567890">
            <Phone size={14} aria-hidden="true" /> +91 123 456 7890
          </a>
          <span>
            <MapPin size={14} aria-hidden="true" /> Bengaluru, India
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2026 Instahyer. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
