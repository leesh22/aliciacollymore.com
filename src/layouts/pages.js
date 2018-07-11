import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import Footer from '../components/footer';

const Pages = ({ children, data }) => {
return (
  <div>
      <h1>new layout</h1>
     {children()}
  </div>
)}

Pages.propTypes = {
  children: PropTypes.func
}

export default Pages;
