import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import Footer from '../components/footer';
import Header from '../components/header';

const ContentWrapper = styled.div `
  padding: 10% 10% 5% 10%;
`

const CaseWrapper =  styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 150px;

  &:hover a {
    color: teal;
    transition: 0.3s;
  }
`

const CaseItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`

const CaseImage = styled.img`
    width: 90%;
    border-radius: 3px;
    margin-bottom: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(193, 193, 193);
  font-weight: 900;
  transition: 0.3s;
`

const caseStudiesPage = () => (
  <div>
    <Header title="Things I've Done" bgColor='#C1C1C1' subTitle="projects I've worked on"/>
    <ContentWrapper>

      <CaseWrapper>
        <CaseItem>
          <CaseImage src='/imgs/case-studies/help/overview.png'/>
        </CaseItem>
        <CaseItem>
          <h3>YouView Help Application</h3>
          <p>An application which users can source help by reading articles and watching videos.</p>
          <StyledLink to='caseStudies/HelpAppCaseStudy'>More about this project</StyledLink>
        </CaseItem>
      </CaseWrapper>

      <CaseWrapper>
        <CaseItem>
          <h3>Benchmark Scaffolding</h3>
          <p>Bespoke website built for top UK Scaffolding company.</p>
          <StyledLink to='caseStudies/BenchmarkCaseStudy'>More about this project</StyledLink>
        </CaseItem>

        <CaseItem>
        <CaseImage src='/imgs/case-studies/bm/bm-home.png'/>
        </CaseItem>
      </CaseWrapper>

      <CaseWrapper>
        <CaseItem>
          <CaseImage src='/imgs/case-studies/vp/vp-foryou.png'/>
        </CaseItem>

        <CaseItem>
          <h3>Video Previews</h3>
          <p>Implementation of video previews and trailers across the UI.</p>
          <StyledLink to='caseStudies/VideoPreviewCaseStudy'>More about this project</StyledLink>
        </CaseItem>
      </CaseWrapper>


      <CaseWrapper>
        <CaseItem>
          <h3>Marcus Druen</h3>
          <p>Bespoke website built for buiness consultant.</p>
          <StyledLink to='caseStudies/MdCaseStudy'>More about this project</StyledLink>
        </CaseItem>

        <CaseItem>
        <CaseImage src='/imgs/case-studies/md/md-home.png'/>
        </CaseItem>
      </CaseWrapper>


       <CaseWrapper>
        <CaseItem>
          <CaseImage src='/imgs/case-studies/st/mysoletrader2.jpg'/>
        </CaseItem>

        <CaseItem>
          <h3>My SoleTrader</h3>
          <p>A bespose CMS which helped user to manage their websites and accounts.</p>
          <StyledLink to='caseStudies/SoleTraderCaseStudy'>More about this project</StyledLink>
        </CaseItem>
      </CaseWrapper>

    </ContentWrapper>
    <Footer/>
  </div>
)

export default caseStudiesPage;
