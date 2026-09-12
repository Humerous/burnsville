import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './account-auth.css';
export default function ContactScreen() {
  return <section className="burnsville-account-auth burnsville-contact" aria-labelledby="contact-title">
    <Meta title="Contact | Burnsville" description="Contact and account support at Burnsville." />
    <div className="burnsville-account-auth__inner">
      <aside className="burnsville-account-auth__introduction"><p className="burnsville-account-auth__eyebrow">Contact Burnsville</p><h2>Let's talk.</h2><p>For existing orders, sign in to view your order details.</p><Link className="burnsville-contact__account" to="/profile">View my account →</Link><div className="burnsville-account-auth__accent" aria-hidden="true" /></aside>
      <div className="burnsville-account-auth__panel">
        <header><p className="burnsville-account-auth__eyebrow">Get in touch</p><h1 id="contact-title">Contact</h1></header>
        <p id="contact-availability" className="burnsville-service-notice">Online enquiries are not available yet. This form cannot send a message.</p>
        <form aria-describedby="contact-availability" onSubmit={event => event.preventDefault()}>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required /></div>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-phone">Phone (optional)</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" /></div>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-type">Enquiry type</label><select id="contact-type" name="type"><option>General enquiry</option><option>Order support</option></select></div>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-order">Order number (optional)</label><input id="contact-order" name="order" /></div>
          <div className="burnsville-account-auth__field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} maxLength={5000} required /></div>
          <button type="submit" disabled aria-describedby="contact-availability">Sending unavailable</button>
        </form>
      </div>
    </div>
  </section>;
}
