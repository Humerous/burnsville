import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'All sauces', to: '/shop' },
      { label: 'Heat guide', to: '/#shop-by-heat' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Your account',
    links: [
      { label: 'Sign in', to: '/login' },
      { label: 'Cart', to: '/cart' },
    ],
  },
];

// <---- FOOTER FUNCTION  ---->
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='burnsville-footer'>
      <div className='burnsville-footer__inner'>
        <div className='burnsville-footer__brand'>
          <Link to="/" aria-label="Burnsville home"><img className="burnsville-footer__seal" src="/brand-mark.png" width="96" height="96" alt="Burnsville Hot Sauce, Cape Town" /></Link>
          <p>Heat. Flavour. Character.</p>
        </div>

        <nav className='burnsville-footer__nav' aria-label='Footer navigation'>
          {footerGroups.map((group) => (
            <section className='burnsville-footer__group' key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <div className='burnsville-footer__statement' aria-hidden='true'>
          <span>Burnsville</span>
          <strong>Heat. Flavour. Character.</strong>
        </div>
      </div>

      <div className='burnsville-footer__legal'>
        <p>&copy; {currentYear} Burnsville Hot Sauce.</p>
        <p>Site by Chameleon Unicode Studios</p>
      </div>
    </footer>
  );
};

// <---- EXPORT ---->
export default Footer;
