import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../components/contentWrapper';
import CsIntro from '../../components/csIntro';
import CaseWrapper from '../../components/caseWrapper';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';
import ScreenImage from '../../components/screenImage';
import ItalicPara from '../../components/ItalicPara';


const HelpAppCaseStudy = () => (
  <ContentWrapper>
    <CsIntro title='YouView Help Application' stack='Typescript, Node.js, Javascript, gulp.js, SASS'/>
    <CaseWrapper>
      <LeftItem>
        <ScreenImage src='/imgs/case-studies/help/oldHelpApp.png'/>
      </LeftItem>
      <LeftItem>
        <h3>What was the problem</h3>
        <p>We had recently transformed our main TV platform to fit in with more modern practices using Typescript, HTML5 and PostCSS, this also came with brand new design and UX.</p>
        <p>Within our main UI, we have a help application which users can launch for help and troubleshooting. The Help app was built separately from our main UI so when the update happened the Help application was left with our old design and UX specifications.</p>
        <p>I was asked by my tech lead to work with UX and UI designers to build a new help application that was more in line with our new UI. </p>    
      </LeftItem>
    </CaseWrapper>

    <CaseWrapper>
      <LeftItem>
        <h3>What was the solution</h3>
        <p>The design team came up with a design working closely with me to ensure what they envisioned was possible - once the designs were approved I got to work on the code. </p>
        <p>I thought it was best to use typescript in case we ever wanted to integrate our help application within our main UI codebase. I built out the build process using Gulp.js and Node.js, I also incorporated Typescript test coverage using Karma, Istanbul and Rollem. I built out the bulk of the app using an MVC pattern, I decided to go with this approach as there was a need to serve data (articles) to our users based on their actions (if they selected an article) and I like the self containment MVC provides.</p>
      </LeftItem>
      <RightItem>
        <ScreenImage src='/imgs/case-studies/help/overview.png'/>
      </RightItem>
    </CaseWrapper>

    <CaseWrapper>
      <LeftItem>
        <ScreenImage src='/imgs/case-studies/help/HelpScrollingTopics.gif'/>
      </LeftItem>
      <LeftItem>
        <h3>What was the outcome</h3>
        <p>By the end of the project I had built a working application which allowed users to navigate the articles and view videos to help them troubleshoot issues. The app was fast and thanks to UX and design very easy to navigate and find what was needed. </p>
      </LeftItem>
    </CaseWrapper>
      
    <div>
        <h3>Feedback</h3>
        <ItalicPara para='"Alicia analysed the existing help app, reviewing the current implementation and identifying how modern development practices could be applied to improve the app. She worked through multiple interoperability issues to get Typescript, coverage tooling and unit test frameworks working together in harmony, whilst keeping the app light and fast enough to meet performance metrics."'/>
        <p>Phillip Beel - Tech Lead</p>
    </div>
  
    
  </ContentWrapper>
);

export default HelpAppCaseStudy;
