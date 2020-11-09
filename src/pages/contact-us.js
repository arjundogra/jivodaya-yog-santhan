import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();

    console.log("We will fill this up shortly.");
    // code to trigger Sending email
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className="contactUs">
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form onSubmit={sendEmail}>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={state.name}
                  placeholder="Enter your full name"
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={state.email}
                  placeholder="Enter your email"
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={state.subject}
                  placeholder="Enter subject"
                  onChange={onInputChange}
                />
              </Form.Group>
              <Form.Group controlId="subject">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={state.message}
                  rows="3"
                  placeholder="Enter your message"
                  onChange={onInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
