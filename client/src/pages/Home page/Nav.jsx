import React, { useContext, useState } from 'react';
import "./Homestyles/nav.css";
import AuthContext from '@/context/AuthContext';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navmainhead">
      <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} id="header">
        <div className="mainlist">
          <a href="/"> 
            <img className='logo' src="/images/beiyo_logo2.svg" alt="Logo" />
          </a>
          <div className="pclist">
            <ul className='pcnavlist'>
              {location.pathname !== "/hostel" && !location.pathname.startsWith("/hostel/") && (
                <a href="/hostel"><li><p>Hostels</p></li></a>
              )}
              {user ? (
                <a href="/dashboard"><li><p>DashBoard</p></li></a>
              ) : (
                <a href="/login"><li><p>Login</p></li></a>
              )}
            </ul>
            <div className="menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <img className='menubtn' src="/images/close.png" alt="Close Menu" />
              ) : (
                <img className='menubtn' src="/images/menuicon.svg" alt="Open Menu" />
              )}
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className='mobilenavlist'>
            {location.pathname !== "/hostel" && !location.pathname.startsWith("/hostel/") && (
              <a href="/hostel"><li><p>Hostels</p></li></a>
            )}
            {user ? (
              <a href="/dashboard"><li><p>DashBoard</p></li></a>
            ) : (
              <a href="/login"><li><p>Login</p></li></a>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;