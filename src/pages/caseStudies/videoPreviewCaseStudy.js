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

const VideoPreviewCaseStudy = () => (
  <div>
  <ContentWrapper>
    <BackLink to='/caseStudies'><img src='/imgs/back-arrow.png'/></BackLink>
    <h4>Case Study</h4>
    <h1>YouView Video Previews</h1>
    <p>Typescript, RxJs, DynamoDb, AWS, Node.js, Javascript, gulp.js, SASS</p>
    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/vp/vp.png'/>
      </Item>

      <Item>
        <h3>What was the problem</h3>
        <p>We needed more ways to drive users to content whilst in a browsing phase, taking lead from major platform distributors such as netflix and YouTube we decided we should implement Video Trailers into the UI.</p>
      </Item>
    </CaseWrapper>

     <CaseWrapper>
     <Item>
        <h3>What was the solution</h3>
        <p>Due to the restrictions of the hardware we use such as low CPU and lack of tuners I had to look into solutions that could work within our limitations. I researched HLS streams which are less expensive than mp4's as HLS downloads incrementally rather than having to download a whole mp4 file of which size could be quite large. </p>
      </Item>

      <Item>
      <StyledImg src='/imgs/case-studies/vp/vp.png'/>
      </Item>
    </CaseWrapper>

    <CaseWrapper>
      <Item>
        <StyledImg src='/imgs/case-studies/vp/vp.png'/>
      </Item>

      <Item>
        <h3>What was the outcome</h3>
        <p>I implemented a new area into the UI which allows user to specifically browse category based content and watch trailers in order to make a decision to either watch now or add to a 'watch later' list. I also implement trailers in to the main channel browsing area of the UI to encourage users to select a programme to watch.</p>
      </Item>
    </CaseWrapper>


     <LastItem>
        <h3>Feedback</h3>
        <p><i>"Alicia embraced the goal, and made great progress. Working well with UX and Android developers. Alicia made progress with minimal guidance, finding and integrating solutions to problems as they arose. (eg. researching and adding HLS support in browser). She proactively flagged issues, and looked for direction when needed. Direction and course corrections were understood and acted on quickly."</i></p>
        <p><i>"The outcome was a working demo on an Android TV device. Alicia had an opportunity to demo her work to a small number of UX and tech staff, her work was also presended to our external partners including Sony which was very well recieved"</i></p>
        <p>Morgan Henry - Team Lead</p>
      </LastItem>

  </ContentWrapper>
      <Footer/>

  </div>
);

export default VideoPreviewCaseStudy;
