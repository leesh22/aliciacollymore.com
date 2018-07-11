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

const SoleTraderCaseStudy = () => (
  <div>
<ContentWrapper>
    <BackLink to='/caseStudies'><img src='/imgs/back-arrow.png'/></BackLink>
    <h4>Case Study</h4>
    <h1>MySoleTrader</h1>
    <p>AngularJs, Javascript, PHP, SASS, HTML, WordPress</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/st/st-site.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>SoleTrader.com has a customer base who are not always great with tech and were struggling to update their website often making mistakes and breaking the site. SoleTrader.com offered free unlimited changes and had a team in India who carried them out, the amount of changes was often overwhelming and the team struggled to keep up, we needed to help facilitate the customers to update there sites on there own.</p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
     <Item>
        <h3>What was the solution</h3>
        <p>We decided to build a 'foolproof' user interface to allow easy updating of websites and account information, working closely with our backend developer I developed the front end of user interface using Angular 1.4.</p>
        <p>Working with the Wordpress API and SugarCRM API we enabled customers to update everything from there website gallery to there account preferences with ease. Using Sass I ensured the platform was fully responsive to allow users to update there website on the go. </p>
      </Item>

      <Item>
      <StyledImg style={{marginLeft: '100px'}} src='/imgs/case-studies/st/mysoletrader2.jpg'/>
      </Item>
    </CaseWrapper>

    <CaseWrapper>
      <Item>
       <StyledImg src='/imgs/case-studies/st/mysoletrader.jpg'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>Customers were able to easily update there website and account information with ease, which reduced the amount of changes our external team had to carry out, overall it was a great success and often praised by customers. </p>
      </Item>
    </CaseWrapper>


     <LastItem>
        {/* <h3>Feedback</h3>
        <p><i>"Alicia analysed the existing help app, reviewing the current implementation and identifying how modern development practices could be applied to improve the app. She worked through multiple interoperability issues to get Typescript, coverage tooling and unit test frameworks working together in harmony, whilst keeping the app light and fast enough to meet performance metrics."</i></p>
        <p>Phillp Beal - Tech Lead</p> */}
      </LastItem>
  </ContentWrapper>
  <Footer/>
  </div>

);

export default SoleTraderCaseStudy;
