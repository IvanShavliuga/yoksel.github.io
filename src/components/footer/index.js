import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Logo from '../logo';
import footerNavData from '../../data/meta/footer-nav.json';

import './styles.scss';

export default function Footer ({ path }) {
  return (
    <footer className="page-footer">
      <div className="page-container">
        <Logo parent="footer"/>

        <nav className="page-footer__nav">
          {footerNavData.map(({ name, url }) => {
            if (path === url) {
              return (
                <span
                  key={nanoid()}
                  className="page-footer__nav-item">{name}</span>
              );
            }

            return (
              <Link
                to={url}
                key={nanoid()}
                className="page-footer__nav-item">{name}</Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  path: PropTypes.string
};