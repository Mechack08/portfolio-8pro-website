import React, { useRef } from "react";
import "./contact.css";
import Options from "./Options";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bi8wcbw",
      "template_ahgazpp",
      form.current,
      "user_L1YG5i3RjdX5g5NioYxsE"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Options
            title="Email"
            adress="mechackkobius@gmail.com"
            sendTo="mailto:mechackkobius@gmail.com"
            icon={MdOutlineEmail}
          />
          <Options
            title="Messanger"
            adress="Mechack Kobius Makasi"
            sendTo="https://m.me/mechack.makasi"
            icon={RiMessengerLine}
          />
          <Options
            title="Whatsapp"
            adress="+243 972 508 629"
            sendTo="https://api.whatsapp.com/send?phone+243972508629"
            icon={FaWhatsapp}
          />
        </div>

        <form ref={form} onSubmit={sendMail}>
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
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
