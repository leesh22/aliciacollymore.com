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
        <p>We had recently transformed our main TV platform to fit in with more modern practices using Typescript, HTML5 and PostCSS, this also came with brand new design and UX.</p>
        <p>Within our main UI, we have a help application which users can launch for help and troubleshooting. The Help app was built separately from our main UI so when the update happened the Help application was left with our old design and UX specifications.</p>
        <p>I was asked by my tech lead to work with UX and UI designers to build a new help application that was more in line with our new UI. </p>    
      </Item>
    </CaseWrapper>

     <CaseWrapper>
     <Item>
        <h3>What was the solution</h3>
        <p>The design team came up with a design working closely with me to ensure what they envisioned was possible - once the designs were approved I got to work on the code. </p>
        <p>I thought it was best to use typescript in case we ever wanted to integrate our help application within our main UI codebase. I built out the build process using Gulp.js and Node.js, I also incorporated Typescript test coverage using Karma, Istanbul and Rollem. I built out the bulk of the app using an MVC pattern, I decided to go with this approach as there was a need to serve data (articles) to our users based on their actions (if they selected an article) and I like the self containment MVC provides.</p>
      </Item>

      <Item>
      <StyledImg  style={{marginLeft: '100px'}}  src='/imgs/case-studies/help/overview.png'/>
      </Item>
    </CaseWrapper>

    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/help/HelpScrollingTopics.gif'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>By the end of the project I had built a working application which allowed users to navigate the articles and view videos to help them troubleshoot issues. The app was fast and thanks to UX and design very easy to navigate and find what was needed. </p>
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
