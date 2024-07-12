import React from 'react';
import styled from 'styled-components';
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
    font-family: 'Klee One', cursive;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.5;
  }
`;

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_mpqa9wb',
        e.target,
        'C50BD60O_L1VisqwN'
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!!');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <FormStyle onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              required="required"
              id="name"
              name="name"
              placeholder="Please enter you name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              required="required"
              id="email"
              name="email"
              placeholder="Please enter your email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              required="required"
              id="message"
              name="message"
              placeholder="Please enter your message"
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStyle>
    </div>
  );
}
export default ContactForm;