import React from 'react';
import { Link } from 'react-router-dom';
const Side = () => {
  return (
    <div className="sidebar">
       <ul>
        <li><Link className="nav-link" to={'/Cand_Page'}>
                  </Link>Candidate</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Side;
