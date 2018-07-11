import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../components/contentWrapper';
import CsIntro from '../../components/csIntro';
import CaseWrapper from '../../components/caseWrapper';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';
import ScreenImage from '../../components/screenImage';
import ItalicPara from '../../components/ItalicPara';


const VideoPreviewCaseStudy = () => (
  <ContentWrapper>
    <CsIntro title='YouView Video Previews' stack='Typescript, RxJs, DynamoDb, AWS, Node.js, HLS.js, Javascript, gulp.js, PostCSS'/>
    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/vp/vp-discover.png'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the problem</h3>
            <p>One of YouViews goals is to drive users to content whilst also providing a great TV experience for the user.</p>
            <p>We needed more ways to drive users to content whilst in a browsing phase, taking lead from major platform distributors such as netflix and YouTube we decided we should implement Video Trailers into the UI.</p>
      </LeftItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <h3>What was the solution</h3>
            <p>YouView uses visual carousels within there main UI to help users navigate content, working with UX we quickly identified the carousels as the best place to display the trailers. </p>
            <p>At YouView we work with set top boxes and displaying two videos (live tv and trailers) at onces proved to be a difficult task due minimal features within the set top box.</p>
            <p>I quickly identified these issues and worked with Android developers to port our UI to an Android device which could support the feature better.</p>
            <p>I did some research into video streaming and decided HLS streams were our best option to allow for quick loading, using HLS.js and a third party api for trailer coverage I added trailers to our UI. </p>
            <p>The third party api had an insufficient amount of trailers and limited our implementation. I sourced a bunch of trailers myself and using ffmpeg converted them from mp4 to HLS, I added the videos to a Dynamo database and built and api using node.js and AWS services to connect and serve the videos based of content type or provider, this allowed us to display a multitude of videos across the UI. </p>
        </LeftItem>
        <RightItem>
            <ScreenImage src='/imgs/case-studies/vp/vp-disc-1.png'/>
        </RightItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/vp/vp-foryou.png'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the outcome</h3>
            <p>We now have video trailers across the UI (on Android devices) allowing the content to come to life and help users make a decision, we also have a fully functional trailer API which can be used across the team. We are currently working on implementing live previews which will display live content whilst the user browses.</p>
        </LeftItem>
    </CaseWrapper>

    <div>
        <h3>Feedback</h3>
        <ItalicPara para='"Alicia embraced the goal, and made great progress. Working well with UX and Android developers. Alicia made progress with minimal guidance, finding and integrating solutions to problems as they arose. (eg. researching and adding HLS support in browser). She proactively flagged issues, and looked for direction when needed. Direction and course corrections were understood and acted on quickly."'/>
        <ItalicPara para='"The outcome was a working demo on an Android TV device. Alicia had an opportunity to demo her work to a small number of UX and tech staff, her work was also presended to our external partners including Sony which was very well recieved"'/>
        <p>Morgan Henry - Team Lead</p>
    </div>
      
  </ContentWrapper>
);

export default VideoPreviewCaseStudy;
