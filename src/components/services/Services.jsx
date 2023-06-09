import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I provide intuitive and user-friendly UI/UX designs to enhance
                user experiences.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I create visually appealing interfaces that prioritize usability
                and accessibility.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I focus on understanding user needs and designing interfaces
                that meet their requirements.
              </p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I specialize in creating responsive and dynamic web applications
                using the latest technologies.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I develop robust and scalable web solutions tailored to meet
                your specific business needs.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I ensure that your website is optimized for performance,
                security, and search engine visibility.
              </p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I offer professional content creation services, including
                engaging blog posts, articles, and copywriting.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I can help you develop compelling and persuasive content to
                effectively communicate your message.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                I ensure that the content is well-researched, optimized for SEO,
                and tailored to your target audience.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
