import React from 'react';
import './newsletter-signup.css';

const NewsletterSignup = () => {
  return (
    <section
      className='burnsville-newsletter'
      aria-labelledby='burnsville-newsletter-title'
    >
      <div className='burnsville-newsletter__inner'>
        <div className='burnsville-newsletter__mark' aria-hidden='true'>
          <span />
        </div>

        <div className='burnsville-newsletter__copy'>
          <p>Stay close to the heat</p>
          <h2 id='burnsville-newsletter-title'>Join the Burnsville crew</h2>
          <span>Occasional updates from the Burnsville range.</span>
        </div>

        <p className='burnsville-newsletter__availability'>Newsletter subscriptions are not available yet.</p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
