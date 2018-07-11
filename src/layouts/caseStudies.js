import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import './index.css';

import Footer from '../components/footer';


const CaseStudies = ({ children, data }) => {
return (
    <div>
      {children()}
      <Footer/>
    </div>
)}

CaseStudies.propTypes = {
  children: PropTypes.func
}

export default CaseStudies;
