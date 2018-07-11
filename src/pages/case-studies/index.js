import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Header from '../../components/header';
import CaseWrapper from '../../components/caseWrapper';
import ContentWrapper from '../../components/contentWrapper';
import ScreenImage from '../../components/screenImage';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(193, 193, 193);
  font-weight: 900;
  transition: 0.3s;
`

const IndexPage = () => (
  <div>
    <Header title="Things I've Done" bgColor='#C1C1C1' subTitle="projects I've worked on"/>
    <ContentWrapper>

      <CaseWrapper>
        <LeftItem>
          <ScreenImage src='/imgs/case-studies/help/overview.png'/>
        </LeftItem>
        <LeftItem>
          <h3>YouView Help Application</h3>
          <p>An application which users can source help by reading articles and watching videos.</p>
          <StyledLink to='case-studies/help-app'>More about this project</StyledLink>
        </LeftItem>
      </CaseWrapper>

      <CaseWrapper>
        <LeftItem>
          <h3>Benchmark Scaffolding</h3>
          <p>Bespoke website built for top UK Scaffolding company.</p>
          <StyledLink to='case-studies/benchmark'>More about this project</StyledLink>
        </LeftItem>

        <RightItem>
          <ScreenImage src='/imgs/case-studies/bm/bm-home.png'/>
        </RightItem>
      </CaseWrapper>

      <CaseWrapper>
        <LeftItem>
          <ScreenImage src='/imgs/case-studies/vp/vp-foryou.png'/>
        </LeftItem>

        <LeftItem>
          <h3>Video Previews</h3>
          <p>Implementation of video previews and trailers across the UI.</p>
          <StyledLink to='case-studies/video-previews'>More about this project</StyledLink>
        </LeftItem>
      </CaseWrapper>

      <CaseWrapper>
        <LeftItem>
          <h3>Marcus Druen</h3>
          <p>Bespoke website built for buiness consultant.</p>
          <StyledLink to='case-studies/marcus-druen'>More about this project</StyledLink>
        </LeftItem>

        <RightItem>
          <ScreenImage src='/imgs/case-studies/md/md-home.png'/>
        </RightItem>
      </CaseWrapper>

       <CaseWrapper>
        <LeftItem>
          <ScreenImage src='/imgs/case-studies/st/mysoletrader2.jpg'/>
        </LeftItem>

        <LeftItem>
          <h3>My SoleTrader</h3>
          <p>A bespose CMS which helped user to manage their websites and accounts.</p>
          <StyledLink to='case-studies/my-soletrader'>More about this project</StyledLink>
        </LeftItem>
      </CaseWrapper>

    </ContentWrapper>
  </div>
);

export default IndexPage;
