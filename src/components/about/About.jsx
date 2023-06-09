import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me"></img>
          </div>
        </div>

        <div className="about__content">
          {/* CARD 1 */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years</small>
            </article>

            {/* CARD 2 */}

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>No clients</small>
            </article> */}

            {/* CARD 3 */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>
          {/* <h2 className="about__header">Hello I'm Dmitry Ulasau</h2> */}
          <p>
            I'm a Software Developer with a passion for creating innovative and
            user-friendly applications. With a strong foundation in HTML, CSS,
            and JavaScript, I have experience working with various technologies
            such as ReactJS, Node.js, Python, and SQL. My focus is on developing
            robust backend systems and seamless frontend experiences.
          </p>
          <a href="/#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
