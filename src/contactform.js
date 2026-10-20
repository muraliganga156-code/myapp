import React from 'react';

function ContactForm() {
  return (
    <form>
      <h2>Contact Us</h2>

      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
      />
      <br /><br />

      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;