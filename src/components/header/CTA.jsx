import React from "react";
import cvnew from "../../assets/cvnew.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={cvnew} className="btn" target="_blank" rel="noreferrer">
        Download CV
      </a>
      <a href="/#contact" className="btn btn-primary">
        &nbsp;Contact Me &nbsp;
      </a>
    </div>
  );
}
