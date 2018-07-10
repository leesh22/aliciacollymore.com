import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import Header from '../components/header';
import Footer from '../components/footer';


const ContentWrapper = styled.div `
  padding: 10% 10% 5% 10%;
`

const ItemWrapper =  styled.div`
  margin-bottom: 100px;

  & ul {
    list-style-type: none;
    margin-bottom: 50px;
  }
`

const Logo = styled.img`
  max-height: 70px;
`

const StyledLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #F18F01;
  font-weight: 900;
  transition: 0.5s;

  &:hover {
    color: teal;
    transition: 0.5s;
  }
`

const experiencePage = () => (
  <div>
    <Header title="Where I've Been" bgColor='#F18F01' subTitle="companies I've worked for"/>
    <ContentWrapper>
        <ItemWrapper>
              <Logo src='/imgs/yv-logo.png'/>
              <p>YouView is a hybrid television platform for BT and TalkTalk. </p>
              <p>My role at YouView covered many aspects of development such as testing, deployment and build processes.  As part of the Settings team I worked closely with product and UX teams to improve the user experience. I am now on the innovation team helping to develop new and exciting features.</p>
              <ul>
                <li>- Built out external Help application prototype using Typescript</li>
                <li>- Implemented multiple setting options using Redux and RxJS</li>
                <li>- Introduced CSS into the build process using Webpack, Stylelint and Sass</li>
                <li>- Implemented HLS Video Trailers into UI as a solo project carrying out design, UX and development</li>
                <li>- Built and deployed multiple API’s connecting to AWS services such as Dynamodb and PostgreSQL</li>
                <li>- Worked side by side with Android developers to port UI to Android TV devices</li>
              </ul>
              <StyledLink to='/caseStudies'>Have a look at some projects I carried out at YouView</StyledLink>
        </ItemWrapper>

        <ItemWrapper>
              <Logo src='/imgs/st-logo.png'/>
              <p>SoleTrader.com are the largest DIFM website provider in the UK.</p>
              <p>During my time as tech lead as SoleTrader.com, I was in-charge of the design and development of all themes and build processes, When the need to develop our own internal application was prioritised, I stepped into a data architect role to help progress the task quickly.</p>
              <ul>
                <li>- Bespoke WordPress Themes using HTML5, CSS, jQuery & PHP</li>
                <li>- Building Internal systems using PHP, SQL and AngularJs</li>
                <li>- Website development and maintenance including landing page conversions</li>
                <li>- Agile project management</li>
                <li>- Internal and external team management</li>
              </ul>
              <StyledLink to='/caseStudies/SoleTraderCaseStudy'>Check out a major project I worked on while at SoleTrader.com</StyledLink>
        </ItemWrapper>
    </ContentWrapper>
    <Footer/>
  </div>
);

export default experiencePage;
