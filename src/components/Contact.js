import { useState } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [successful, setSuccessful] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const params = {
      to_name: "Aidan",
      from_name: e.target["from_name"].value,
      reply_to: e.target["reply_to"].value,
      message: e.target["message"].value,
    };
    
    try {
      setSending(true);
      const response = await emailjs.send(
        "service_wz8iqch", 
        "template_9z4t09g",
        params,
        "5fVkLfpLnmlCksX2U"
      );

      if (response.status === 200) {
        setSending(false);
        setSent(true);
        setSuccessful(true);
      } else {
        throw new Error(response);
      }

    } catch (err) {
      setSending(false);
      setSent(true);
      setSuccessful(false);
    }
  }

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p className="subtitle">Please feel free to get in touch if there's anything we can do for each other!</p>
      <article className="form background-style">
        <h5>Fill out this form...</h5>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name
            <input type="text" id="name" name="from_name" maxLength="20" required disabled={sending || (sent && successful) ? true : false} />
          </label>

          <label htmlFor="email">Email Address
            <input type="text" id="email" name="reply_to" maxLength="50" required disabled={sending || (sent && successful) ? true : false} />
          </label>

          <label htmlFor="message">Message
            <textarea name="message" id="message" maxLength="1000" required disabled={sending || (sent && successful) ? true : false} ></textarea>
          </label>

          {sent && !sending && !successful && <p role="alert">Error during sending. Please try again.</p>}

          <button type="submit"
            className={sending ? "big-link loading" : "big-link"}
            disabled={sending || (sent && successful) ? true : false}
          >
            {sending ? "Sending... " : sent && successful ? "Email Sent!" : "Submit form"}
          </button>

        </form>

          <hr />
          <h5>Or On Your Own Terms...</h5>

          <a href="mailto:adn.mck@gmail.com" className="big-link">Send an email</a>
      </article>
    </section>
  )
}

export default Contact;