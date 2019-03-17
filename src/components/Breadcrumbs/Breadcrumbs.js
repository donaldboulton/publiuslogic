import React from 'react';
import { Link } from 'gatsby';

import './Breadcrumbs.css';

const Breadcrumbs = ({ data }) => (
  <nav className="breadcrumb-container">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      {data.items.map(item => (
        <li key={item._id} className="breadcrumb-item">
          <Link to={item._path}>{item.title}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
