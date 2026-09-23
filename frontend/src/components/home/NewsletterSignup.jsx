import React from 'react';
import burnsvilleNewsletterSeal from '../../assets/brand/burnsville-newsletter-seal.webp';
import './newsletter-signup.css';

const NewsletterSignup = () => {
  return (
    <section
      className='burnsville-newsletter'
      aria-labelledby='burnsville-newsletter-title'
    >
      <div className='burnsville-newsletter__inner'>
        <div className='burnsville-newsletter__mark' aria-hidden='true'>
          <svg
            className='burnsville-newsletter__mark-icon'
            viewBox='0 0 64 48'
            focusable='false'
          >
            <rect x='3' y='5' width='58' height='38' />
            <path d='M4 7l28 21L60 7' />
          </svg>

          <span className='burnsville-newsletter__mark-seal'>
            <img src={burnsvilleNewsletterSeal} alt='' />
          </span>
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
