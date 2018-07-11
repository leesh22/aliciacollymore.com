import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Header from '../components/header';
import ContentWrapper from '../components/contentWrapper';

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: teal;
  }
`

const NotFoundPage = () => (
  <div>
    
  <Header title='Alicia Collymore' bgColor='#444' subTitle="Umm, this page doesn't exsist"/>
  <ContentWrapper>
    <StyledLink to='/'><h2>Head over to to my main page</h2></StyledLink>
  </ContentWrapper>
  </div>
)

export default NotFoundPage
