import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

/**
 * @description Component for showing header
 * @component
 */

const Header = () => {
  const location = useLocation();

  return (
    <div className="header" aria-label="page header">
      <img className="logo" src={logo} alt="logo" />
      <span className="title" aria-label="page title">
        HRNET
      </span>
      {location.pathname === '/employee-list' ? (
        <Link to="/" className="add-button">
          <i className="fa-solid fa-user-plus">
            <FontAwesomeIcon icon={faUserPlus} />
          </i>
          <span>Add employee</span>
        </Link>
      ) : (
        <Link to="/employee-list" className="add-button">
          <i className="fa-solid fa-user">
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>Employee List</span>
        </Link>
      )}
    </div>
  );
};

export default Header;
