import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dmitry-ulasau/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/dmitryulasau"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}
