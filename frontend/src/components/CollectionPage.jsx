import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Meta from './Meta';
import './theme.css';

export default function CollectionPage({ title, eyebrow, children }) {
  return <section className="burnsville-destination" aria-labelledby="destination-title">
    <Meta title={`${title} | Burnsville`} description={`${title} at Burnsville.`} />
    <div className="burnsville-destination__inner">
      <nav className="burnsville-destination__breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <header className="burnsville-destination__heading"><p>{eyebrow}</p><h1 id="destination-title">{title}</h1></header>
      {children}
    </div>
  </section>;
}

CollectionPage.propTypes = {
  children: PropTypes.node.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
