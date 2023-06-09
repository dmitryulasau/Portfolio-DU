import React from "react";
import cv from "../../assets/cv.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={cv} className="btn" target="_blank" rel="noreferrer">
        Download CV
      </a>
      <a href="/#contact" className="btn btn-primary">
        &nbsp;Contact Me &nbsp;
      </a>
    </div>
  );
}
