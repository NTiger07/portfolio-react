import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.from_name.value;
    const email = e.target.from_email.value;
    const subject = e.target.user_subject.value;
    const message = e.target.message.value;

    const overall =
      "Name: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Subject: " +
      subject +
      "\n" +
      "Message: " +
      message;
    //
    emailjs
      .sendForm(
        "service_t2crjsn",
        "template_osg8uvs",
        form.current,
        "FfdpyGOGgm8_YkTz7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_section">
      <h1>CONTACT ME</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Subject</label>
          <input type="text" name="user_subject" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
