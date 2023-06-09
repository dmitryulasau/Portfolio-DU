import React, { useState } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { RiMailSendFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const showMessage = () => {
    toast.info("Your message has been sent!");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vaiwgv6",
        "template_7dh2j7k",
        form.current,
        "G8OVwMoAPP_dOhnnM"
      )
      .then(
        (result) => {
          setMessageSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dmitrushok@gmail.com</h5>
            <a
              href="mailto:dmitrushok@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            onClick={showMessage}
            type="submit"
            className="btn btn-primary"
            style={{
              display: "flex",
              alignContent: "center",
              gap: "0.4rem",
              fontWeight: 600,
            }}
          >
            Send Message
            <span>
              <RiMailSendFill />
            </span>
          </button>
          {messageSent && <ToastContainer position="top-center" />}
        </form>
      </div>
    </section>
  );
}
