import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "BRAINGAIN",
    github: "https://github.com/dmitryulasau",
    demo: "https://braingain-ulasau.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "OMNIFOOD",
    github: "https://github.com/dmitryulasau",
    demo: "https://omnifood-ulasau.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Guess My Number",
    github: "https://github.com/dmitryulasau",
    demo: "https://ulasau-guess-my-number.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "HANGMAN",
    github: "https://github.com/dmitryulasau",
    demo: "https://hangman-dmitryulasau.vercel.app/",
  },
];
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="project"></img>
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
