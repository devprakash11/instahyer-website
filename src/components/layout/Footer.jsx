import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import LogoPlaceholder from "../common/LogoPlaceholder";
import { LinkedInIcon, YouTubeIcon } from "../common/SocialIcons";
import { footerColumns } from "../../data/webinarData";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <LogoPlaceholder light />
          <p>Empowering HR leaders with insights, strategies and communities.</p>
          <div className="social-links" aria-label="Social media">
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon size={15} />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTubeIcon size={16} />
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
            <Mail size={14} /> help@peoplefirst.com
          </a>
          <a href="tel:+911234567890">
            <Phone size={14} /> +91 123 456 7890
          </a>
          <span>
            <MapPin size={14} /> Bengaluru, India
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2026 People First. All rights reserved.</p>
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
