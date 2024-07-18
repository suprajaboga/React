import { useState } from "react";
import contactUs from "../utils/Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    setMessage(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contactUs} alt="Contact Us" />
      </div>
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your message here..." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting TastyEats, we will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
