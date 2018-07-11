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


const BenchmarkCaseStudy = () => (
  <div>
  <ContentWrapper>
    <BackLink to='/caseStudies'><img src='/imgs/back-arrow.png'/></BackLink>
    <h4>Case Study</h4>
    <h1>Marcus Druen</h1>
    <p>PHP, Javascript, JQuery, Wordpress, HTML, CSS</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/md/md-home.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>Marcus Druen is a business consultant who works with reputable business to improve the way they manage staff.</p>
        <p>Marcus came to me with the main issue of not being able to access or update his website effectively and not understanding how his website worked, he hired me to rebuild his Wordpress website with an 'easy to use' theme.</p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
      <Item>
        <h3>What was the solution</h3>
        <p>Working closely with Marcus I quickly identified the key areas of the website he would like to be able to update and have control over, I transferred his domain and website from his previous provider onto his own hosting account allow him to better manage his assets.</p>
        <p>I built out a custom theme which replicated the design of his previous site and used the Wordpress API to add custom fields which allows Marcus to easily edit and manage his website. With Wordpress templating, I built Marcus a reusable landing page which he is able to tailor for each potential client. </p>
        <p>Using jQuery and CSS I added a number of small features including accordions, tabs and customs animations. Utilising CSS I ensured the website is fully responsive and works well on all major devices and browsers. </p>
       </Item>

      <Item>
        <StyledImg  style={{marginLeft: '100px'}} src='/imgs/case-studies/md/md-home.png'/>
      </Item>

    </CaseWrapper>

     <CaseWrapper>
      <Item>
       <StyledImg src='/imgs/case-studies/md/md-video.gif'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>Marcus was thrilled with the changes, he is able to create tailored landing pages on the fly and add blog posts with ease. I have since built 2 more websites for Marcus' various business to help facilitate their growth and online presence.</p>
      </Item>
    </CaseWrapper>

      {/* <LastItem>
        <h3>Feedback</h3>
        <p><i>"Marcus' comments to go here"</i></p>
        <p>Marcus Druen - Business Consultant</p>
      </LastItem> */}
  </ContentWrapper>
      <Footer/>

  </div>

);

export default BenchmarkCaseStudy;
