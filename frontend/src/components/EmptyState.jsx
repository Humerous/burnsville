import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function EmptyState({ title, children, to, action }) {
  return <div className="burnsville-empty-state">
    <span className="burnsville-empty-state__rule" aria-hidden="true" />
    <h2>{title}</h2>{children && <p>{children}</p>}
    {to && <Link className="burnsville-action" to={to}>{action}<span aria-hidden="true"> →</span></Link>}
  </div>;
}

EmptyState.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};
