import { useState } from "react"
import "./contact.scss"
import React, { useRef } from "react"
import emailjs from "emailjs-com"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_rf3x1lv", "template_tuwtjjl", form.current, "F_X3quFmDTmvZ38Wo").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    e.target.reset()
    setMessage(true)
  }

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="number" name="phone" placeholder="Phone" />

          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message</span>}
        </form>
      </div>
    </div>
  )
}
