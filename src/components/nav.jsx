import { useState } from 'react';
import './nav.scss';
import logo from '../images/logo.svg';
import menu from '../images/menu.svg';
import close from '../images/close.svg';

function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function toggleMenu() {
    setIsMenuActive(!isMenuActive);
  }

  function closeMenu() {
    setIsMenuActive(false);
  }

  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />
      <img
        src={menu}
        className={`menu ${isMenuActive ? 'hidden' : ''}`}
        alt="Menu Icon"
        onClick={toggleMenu}
      />
      {isMenuActive && (
        <div className='dark-screen'>
          <div className="toggle-menu">
            <img
              src={close}
              className="close-icon"
              alt="Close Icon"
              onClick={closeMenu}
            />
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
      )}
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Nav;
