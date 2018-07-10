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
    <h1>Benchmark Scaffolding</h1>
    <p>PHP, Javascript, HTML, CSS, Wordpress</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/bm/bm-old.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>Benchmark scaffolding are one of the largest scaffolding companies in the UK carrying out major work on Westminster, Westfield and the Olympic village. Unfortunately there website did not reflect there status, working closely with WTEA we aimed to rectify this.</p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
      <Item>
        <h3>What was the solution</h3>
        <p>Benchmark wanted an easy to use site which reflected their abilities effectively. Working closely with the WTEA team  we designed a high end website with a simple WordPress backend which was striped and customised to allow for very easy editing and blog posting.</p>
      </Item>

      <Item>
        <StyledImg src='/imgs/case-studies/bm/bm2.png'/>
      </Item>

    </CaseWrapper>

     <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/bm/bm-video.gif'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>Benchmark are extremely happy with their new site and regularly create blog posts of what there are up to, the site now reflects the standards of the company effectively.</p>
      </Item>
    </CaseWrapper>

      <LastItem>
        {/* <h3>Feedback</h3>
        <p><i>"Kat's comments to go here"</i></p>
        <p>Katherine Ferdinand - Creative Director @ WTEA</p> */}
      </LastItem>
    
  </ContentWrapper>
  <Footer/>
  </div>


);

export default BenchmarkCaseStudy;
