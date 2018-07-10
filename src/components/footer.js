import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Navigation = styled.nav `
    display: grid;
    grid-template-columns: repeat(4,1fr);
    text-align: center;
    background: teal;
`

const StyledLink = styled(Link) `
    padding: 10px;
    color: #fff;
    text-decoration: none;
`

const Footer = () => (

    <Navigation>
        <StyledLink to='/'>hq</StyledLink>
        <StyledLink to='/about' style={{background: '#18435A'}}>a bit about me</StyledLink>
        <StyledLink to='/caseStudies' style={{background: '#C1C1C1'}}>some projects</StyledLink>
        <StyledLink to='/experience' style={{background: '#F18F01'}}>my experience</StyledLink>
    </Navigation>

);

export default Footer
