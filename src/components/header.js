import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import {FaLinkedinSquare, FaTwitterSquare, FaClockO, FaGithubSquare, FaEnvelope} from 'react-icons/lib/fa';
import Mailto from 'react-mailto';

const Wrapper = styled.div `
  height: 400px;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 0px 15px rgba(0,0,0,.7));
`

const HeaderWrapper = styled.div `
  padding: 3%;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  clip-path: ellipse(120% 113% at 50% -13%);
  width: 100%;
  z-index: 1;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
`

const HeaderTitle = styled.h1 `
  font-size: 3em;
  margin-bottom: 0px;
`
const StyledLink = styled(Link) `
  color: #fff;
  text-decoration: none;
`

const HeaderSubTitle = styled.div `
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 7px;
  margin-top: 10px;
`
const HeaderCurve = styled.div `
  background: teal;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: -28px;
  z-index: 1;
  border-radius: 100%;
`
const IconWrapper = styled.div `
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.5em;
  opacity: .7;

  & a {
    color: #ffffff;
  }
  
  & svg {
    margin: 10px;
  }
`

const Header = ({ title, bgColor, subTitle}) => (
  <Wrapper>
  <HeaderWrapper style={{background: bgColor, backgroundSize: 'cover'}}>
      <IconWrapper>
        <Mailto email="hello@aliciacollymore.com" obfuscate={false}><FaEnvelope /></Mailto>
        <Link to='//linkedin.com/in/alicia-collymore-743b0662/' target='_blank'><FaLinkedinSquare /></Link>
        <Link to='//github.com/leesh22' target='_blank'><FaGithubSquare /></Link>
        <Link to='//twitter.com/AliciaCollymore' target='_blank'><FaTwitterSquare /></Link>
        <Link to='//wakatime.com/@alicia' target='_blank'><FaClockO /></Link>
      </IconWrapper>  
      <HeaderTitle>
        <StyledLink to="/">{title}</StyledLink>
      </HeaderTitle>
      <HeaderSubTitle>{subTitle}</HeaderSubTitle>
      {/* <HeaderCurve  style={{background: bgColor}}/> */}
  </HeaderWrapper>
  </Wrapper>
);

export default Header
