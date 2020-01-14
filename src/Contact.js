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
      Email Me:
      <a href="mailto:BenZBraunstein@gmail.com"> BenZBraunstein@gmail.com</a>
      <br />
      <form id="contact-form" onSubmit={onContactFormSubmit}>
        Contact Form
        <input type="hidden" name="contact_number" />
        <br />
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
