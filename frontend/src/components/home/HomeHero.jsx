import React from 'react';
import { Link } from 'react-router-dom';
import './home-hero.css';

const HomeHero = () => (
  <section
    aria-labelledby='burnsville-home-hero-title'
    className='burnsville-home-hero'
  >
    <picture aria-hidden='true' className='burnsville-home-hero__media'>
      <source
        media='(max-width: 767px)'
        srcSet='/images/burnsville-hero-mobile.webp'
      />
      <img
        alt=''
        className='burnsville-home-hero__media-image'
        decoding='async'
        fetchPriority='high'
        height='768'
        src='/images/burnsville-hero-desktop.webp'
        width='2048'
      />
    </picture>

    <div className='burnsville-home-hero__content'>
      <div className='burnsville-home-hero__copy'>
        <p className='burnsville-home-hero__eyebrow'>Burnsville Hot Sauce</p>
        <h1
          className='burnsville-home-hero__title'
          id='burnsville-home-hero-title'
        >
          <span>Turn up the heat.</span>
          <span className='burnsville-home-hero__title-accent'>
            Keep the flavour.
          </span>
        </h1>
        <p className='burnsville-home-hero__summary'>
          Explore Burnsville hot sauces and find the heat level that suits your
          taste.
        </p>
        <div className='burnsville-home-hero__actions'>
          <Link
            className='burnsville-home-hero__cta burnsville-home-hero__cta--primary'
            to='/shop'
          >
            Shop all sauces
          </Link>
          <a
            className='burnsville-home-hero__cta burnsville-home-hero__cta--secondary'
            href='#shop-by-heat'
          >
            Explore heat guide
            <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHero;
