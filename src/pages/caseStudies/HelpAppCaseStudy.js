import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

import Footer from '../../components/footer';

const BackLink = styled(Link)`
  position: absolute;
  top: 30px;

  & img {
    width: 30px;
  }
`

const ContentWrapper = styled.div`
  padding: 10% 10% 5% 10%;

  & h4 {
    margin: 0;
  }
`

const CaseWrapper = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledImg = styled.img`
  width: 80%;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`

const LastItem = styled.div`
  margin-top:100px;
`

const HelpAppCaseStudy = () => (
  <div>
  <ContentWrapper>
    <BackLink to='/caseStudies'><img src='/imgs/back-arrow.png'/></BackLink>
    <h4>Case Study</h4>
    <h1>YouView Help Application</h1>
    <p>Typescript, Node.js, Javascript, gulp.js, SASS</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/help/oldHelpApp.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>We had recently transformed the platform to our next generation UI design however the help application for user trouble shooting was still sporting the old designs,  I was asked by my tech lead to work with  UX and UI designers to come up with the next generation help application. </p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
     <Item>
        <h3>What was the solution</h3>
        <p>As the main UI was built with typescript using a microservice architect I thought it was best to use typescript in case we ever wanted to integrate our help application with our main UI codebase. </p>
      </Item>

      <Item>
      <StyledImg src='/imgs/case-studies/help/overview.png'/>
      </Item>
    </CaseWrapper>

    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/help/HelpScrollingTopics.gif'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>A super snazzy help app!</p>
      </Item>
    </CaseWrapper>


     <LastItem>
        <h3>Feedback</h3>
        <p><i>"Alicia analysed the existing help app, reviewing the current implementation and identifying how modern development practices could be applied to improve the app. She worked through multiple interoperability issues to get Typescript, coverage tooling and unit test frameworks working together in harmony, whilst keeping the app light and fast enough to meet performance metrics."</i></p>
        <p>Phillp Beal - Tech Lead</p>
      </LastItem>
  </ContentWrapper>
  <Footer/>

  </div>
);

export default HelpAppCaseStudy;
