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
    <p>PHP, Javascript, HTML, CSS, Wordpress</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/md/md-home.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>Marcus came to me with the main issue of not being able to update his website effectively and not understanding how his website worked, he hired me to rebuild his Wordpress website with an 'easy to use' theme. </p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
      <Item>
        <h3>What was the solution</h3>
        <p>Working closely with marcus I quickly identified the key areas of the website he would like to be able to update, I removed the site from his previous developers server and gave him full access to his new hosting environment ensuring he understood everything as we progressed, I built out a bespoke wordpress theme were I heavily manipulated the back-end to ensure easy, foolproof editing. </p>
      </Item>

      <Item>
        <StyledImg src='/imgs/case-studies/md/md-home.png'/>
      </Item>

    </CaseWrapper>

     <CaseWrapper>
      <Item>
       <StyledImg src='/imgs/case-studies/md/md-video.gif'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>Marcus was thrilled with the changes and has since hired me to build other easy to use websites for his business, we have a strong working relationship and I ensure he understands what is happening at all times. </p>
      </Item>
    </CaseWrapper>

      <LastItem>
        <h3>Feedback</h3>
        <p><i>"Marcus' comments to go here"</i></p>
        <p>Marcus Druen - Consultant/Directo</p>
      </LastItem>
  </ContentWrapper>
      <Footer/>

  </div>

);

export default BenchmarkCaseStudy;
