import React, { useState } from "react"
import emailjs from "emailjs-com"
import { TextField, Button, Icon } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

function Contact() {
  const [contactStatus, changeContactStatus] = useState("unsent")

  const onContactFormSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "template_H2VXOetq",
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
          changeContactStatus("success")
        },
        error => {
          console.log(error.text)
          changeContactStatus("error")
        }
      )
  }

  return (
    <div style={{ marginTop: "50px" }}>
      Email Me:{"   "}
      <a href="mailto:BenZBraunstein@gmail.com?subject=Hi From Your Portfolio Site">
        BenZBraunstein@gmail.com
      </a>
      <br />
      Text Me:{"   "}
      <a href="sms:+1-516-477-8178?body=Hey Ben, I love your website!">
        516-477-8178
      </a>
      <br />
      <br />
      <form id="contact-form" onSubmit={onContactFormSubmit}>
        <h2>Contact Form</h2>
        <input type="hidden" name="contact_number" />
        <TextField
          id="standard-basic"
          style={{ width: "300px" }}
          label="Name"
          type="search"
          name="user_name"
        />
        <br />
        <TextField
          id="standard-basic"
          style={{ width: "300px" }}
          label="Email"
          type="search"
          name="user_email"
        />
        <br />
        <TextField
          id="standard-basic"
          style={{ width: "300px" }}
          label="Message"
          name="message"
          type="search"
          multiline
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
      <br />
      <div
        style={{ width: "65%", margin: "auto", padding: "20px" }}
        id="Contact Notification"
      >
        {contactStatus === "error" ? (
          <Alert severity="error">
            Message Failed to Send! Please Email BenZBraunstein@gmail.com
          </Alert>
        ) : null}
        {contactStatus === "success" ? (
          <Alert severity="success">Message Successfully Sent!</Alert>
        ) : null}
      </div>
    </div>
  )
}

export default Contact
