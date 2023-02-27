import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  const navItems = [
    {
      path: '/',
      name: 'Books',
    },
    {
      path: 'categories',
      name: 'Categories',
    },
  ];

  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        Bookstore CMS
      </NavLink>
      <nav>
        <ul className={styles.navItems}>
          {navItems.map((e) => (
            <li key={e.name}>
              <NavLink
                to={e.path}
                className={styles.navLink}
                style={({ isActive }) => ({
                  opacity: isActive ? 1 : 0.5,
                })}
              >
                {e.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
