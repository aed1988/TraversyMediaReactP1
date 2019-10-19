import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className = 'navbar bg-primary'>
      <div className = 'navbar'> 
        <h1>
          <FontAwesomeIcon icon={ icon } />
          {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
        
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github finder',
  icon: faGithub
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar
