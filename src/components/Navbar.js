import React from 'react';

import { NavLink } from 'react-router-dom';

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
    <header>
      <NavLink className="logo" to="/">
        Bookstore CMS
      </NavLink>
      <nav>
        <ul className="nav-items">
          {navItems.map((e) => (
            <li key={e.name}>
              <NavLink
                to={e.path}
                className="nav-link"
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
