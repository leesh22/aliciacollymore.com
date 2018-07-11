import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../components/contentWrapper';
import CsIntro from '../../components/csIntro';
import CaseWrapper from '../../components/caseWrapper';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';
import ScreenImage from '../../components/screenImage';
import ItalicPara from '../../components/ItalicPara';


const SoleTraderCaseStudy = () => (
  <ContentWrapper>
    <CsIntro title='MySoleTrader' stack='AngularJs, Javascript, PHP, SASS, HTML, WordPress'/>
    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/st/st-site.png'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the problem</h3>
            <p>SoleTrader.com has a customer base who are not always great with tech and were struggling to update their website often making mistakes and breaking the site. SoleTrader.com offered free unlimited changes and had a team in India who carried them out, the amount of changes was often overwhelming and the team struggled to keep up, we needed to help facilitate the customers to update there sites on there own.</p>
        </LeftItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <h3>What was the solution</h3>
            <p>We decided to build a 'foolproof' user interface to allow easy updating of websites and account information, working closely with our backend developer I developed the front end of user interface using Angular 1.4.</p>
            <p>Working with the Wordpress API and SugarCRM API we enabled customers to update everything from there website gallery to there account preferences with ease. Using Sass I ensured the platform was fully responsive to allow users to update there website on the go. </p>
        </LeftItem>
        <RightItem>
            <ScreenImage src='/imgs/case-studies/st/mysoletrader2.jpg'/>
        </RightItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/st/mysoletrader.jpg'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the outcome</h3>
            <p>Customers were able to easily update there website and account information with ease, which reduced the amount of changes our external team had to carry out, overall it was a great success and often praised by customers. </p>
        </LeftItem>
    </CaseWrapper>

  </ContentWrapper>
);

export default SoleTraderCaseStudy;
