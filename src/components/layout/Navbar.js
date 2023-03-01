import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import UserIcon from './UserIcon';
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
      <div className={cn(styles.navContainer, 'container')}>
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
        <UserIcon className={styles.userIcon} />
      </div>
    </header>
  );
}

export default Navbar;
