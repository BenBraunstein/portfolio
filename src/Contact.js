import React from "react"
import emailjs from "emailjs-com"
import { TextField, Button, Icon } from "@material-ui/core"

function Contact() {
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
        },
        error => {
          console.log(error.text)
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
    </div>
  )
}

export default Contact
