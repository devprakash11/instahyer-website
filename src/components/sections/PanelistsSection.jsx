import React from "react";
import { LinkedInIcon } from "../common/SocialIcons";
import { panelists } from "../../data/webinarData";

function PanelistsSection() {
  return (
    <section className="panelists-section" id="panelists">
      <div className="container panelists-section__container">
        <div className="panelists-section__heading">
          <p className="panelists-section__eyebrow">
            <span aria-hidden="true">—</span>
            Meet the panel
          </p>

          <h2>Leading enterprise teams</h2>

          <p className="panelists-section__description">
            Three HR leaders bring complementary perspectives on people
            strategy, talent
            <br className="panelists-section__desktop-break" />
            acquisition and organisational growth.
          </p>
        </div>

        <div className="panelists-section__grid">
          {panelists.map((panelist) => (
            <article className="panelist-card" key={panelist.name}>
              <div className="panelist-card__image">
                <img
                  src={panelist.image}
                  alt={`${panelist.name}, ${panelist.role}`}
                  loading="lazy"
                />

                <a
                  className="panelist-card__linkedin"
                  href={panelist.linkedin || "#"}
                  aria-label={`${panelist.name} on LinkedIn`}
                  target={panelist.linkedin ? "_blank" : undefined}
                  rel={panelist.linkedin ? "noreferrer" : undefined}
                  onClick={(event) => {
                    if (!panelist.linkedin) {
                      event.preventDefault();
                    }
                  }}
                >
                  <LinkedInIcon size={19} />
                </a>
              </div>

              <div className="panelist-card__content">
                <h3>{panelist.name}</h3>

                <p className="panelist-card__role">
                  {panelist.role}
                </p>

                <p className="panelist-card__company">
                  {panelist.company}
                </p>

                <p className="panelist-card__bio">
                  {panelist.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelistsSection;