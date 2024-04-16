import { useEffect } from "react";
import "./Contacts.css";

export function Contacts() {
  useEffect(() => {
    const btn = document.getElementById("button");

    const handleSubmit = (event) => {
      event.preventDefault();

      btn.value = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_2iiz71j";

      emailjs.sendForm(serviceID, templateID, event.target).then(
        () => {
          btn.value = "Send Email";
        },
        (err) => {
          btn.value = "Send Email";
          console.log(JSON.stringify(err));
        }
      );
    };

    const form = document.getElementById("form");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <section className="contactsContent" id="contactsContent">
      <div className="infoContact">
        <h2>Contacts</h2>
        <p>If you liked my work, contact me through this form.</p>
        <form id="form">
          <div className="field">
            <label htmlFor="from_name">Your name</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="sendInfo"
              placeholder="Enter your name"
            />
          </div>

          <div className="field">
            <label htmlFor="email_id">Email</label>
            <input
              type="email"
              name="email_id"
              id="email_id"
              placeholder="Enter your email"
              className="sendInfo"
            />
          </div>

          <div className="field message-area">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="sendInfo"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <input type="submit" id="button" value="Send Email" className="btn" />
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3378581743473!2d-75.58619518993595!3d6.21910099374291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293f0e114eef%3A0x99610cdd44c7c081!2sRiwi%20-%20Be%20a%20Coder!5e0!3m2!1ses-419!2sco!4v1711924771846!5m2!1ses-419!2sco"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
