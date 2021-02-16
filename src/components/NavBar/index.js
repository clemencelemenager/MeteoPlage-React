/** Import dependancies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/** Import assets */
import './navbar.scss';
// import logo from 'src/assets/images/layout/logo.png';

const NavBar = ({
  responsiveMenu,
  windowWidth,
  handleToggleMenu,
  handleWindowWidth,
}) => {
  /** Manage toggle for responsive display of menu items */
  const toggleNavSmallScreen = () => {
    handleToggleMenu();
  };
  useEffect(() => {
    /** Update state value for windowWidth when the user resize its window */
    const changeWidth = () => {
      handleWindowWidth(window.innerWidth);
    };
    /** Add event listener on resizing window */
    window.addEventListener('resize', changeWidth);
    /** Clean up function */
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className="navbar">
      <NavLink
        to="/"
        className="navbar-item navbar-logo"
        activeClassName="navbar-item--active"
        exact
      >
        Météoplage
      </NavLink>
      <nav className="navbar-menu-container">
        {
          /** Display menu items */
          (responsiveMenu || windowWidth >= 768) && (
            <ul className="navbar-menu">
              <NavLink
                to="/about"
                key="navlink-about"
                className="navbar-menu-item"
                activeClassName="navbar-menu-item--active"
                exact
              >
                A propos
              </NavLink>
            </ul>
          )
        }
      </nav>
      {
        /** Menu Icon for mobile screens */
        windowWidth < 768 && (
          <i
            className="fas fa-bars navbar-menu-responsive"
            onClick={toggleNavSmallScreen}
          />
        )
      }

    </div>
  );
};

NavBar.propTypes = {
  responsiveMenu: PropTypes.bool.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  handleWindowWidth: PropTypes.func.isRequired,
};
export default NavBar;
