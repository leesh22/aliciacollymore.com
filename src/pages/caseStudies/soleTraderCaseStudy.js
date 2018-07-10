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
    <p>AngularJs, Javascript, PHP, MySql, CSS, HTML, WordPress</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/st/mysoletrader2.jpg'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>SoleTrader.com has a customer base who are not always great with customers and were struggling to update there website often making mistakes and breaking the site. We also had a team in India who update sites, we needed to reduce the amount of developers to reduces costs whist still being able to provide customers with changes if need be.</p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
     <Item>
        <h3>What was the solution</h3>
        <p>We decided to build a 'fool proof' back-end to allow easy updating of sites, using the WordPress UI we build a interface users could log into and update there site. The back-end was built by the back-end developer while I built out the front end using the then ever so popular Angular 1.4 </p>
      </Item>

      <Item>
      <StyledImg src='/imgs/case-studies/st/mysoletrader2.jpg'/>
      </Item>
    </CaseWrapper>

    <CaseWrapper>
      <Item>
       <StyledImg src='/imgs/case-studies/st/mysoletrader2.jpg'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>An fresh and funky interface that allowed our customers and staff to updated websites with ease. </p>
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
