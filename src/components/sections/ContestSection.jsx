import React from "react";
import { ArrowRight } from "lucide-react";
import { contestBenefits } from "../../data/webinarData";

function ContestSection({ onRegister }) {
  return (
    <section className="contest" id="contest">
      <div className="container contest__panel">
        <div className="contest__copy">
          <p className="contest__eyebrow">#FutureOfHR contest</p>
          <h2>Ask a powerful question. Win an exciting prize.</h2>
          <p>
            Share your most interesting question about remote hiring, HR leadership or scalable growth. The best entries may be answered live and selected for prizes.
          </p>
          <button className="button button--accent" type="button" onClick={onRegister}>
            Enter with your registration <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>

        <ul className="contest__list">
          {contestBenefits.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.text}>
                <span aria-hidden="true"><Icon size={17} /></span>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ContestSection;
