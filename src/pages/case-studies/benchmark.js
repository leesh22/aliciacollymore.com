import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../components/contentWrapper';
import CsIntro from '../../components/csIntro';
import CaseWrapper from '../../components/caseWrapper';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';
import ScreenImage from '../../components/screenImage';
import ItalicPara from '../../components/ItalicPara';


const BenchmarkCaseStudy = () => (
  <ContentWrapper>
    <CsIntro title='Benchmark Scaffolding' stack='PHP, Javascript, HTML, CSS, Wordpress'/>
    <CaseWrapper>
      <LeftItem>
        <ScreenImage src='/imgs/case-studies/bm/bm-old.png'/>
      </LeftItem>
      <LeftItem>
        <h3>What was the problem</h3>
        <p>Benchmark scaffolding are one of the largest scaffolding companies in the UK and have carried out major work on Westminster, Westfield and the Olympic village. Unfortunately there website did not reflect there status, working closely with WTEA we aimed to rectify this.</p>
      </LeftItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <h3>What was the solution</h3>
            <p>Working closely with the WTEA team we designed a high end website with a simple WordPress backend which was striped and customised to allow for very easy editing and blog posting.</p>
            <p>I decided to use Wordpress for the CMS as I knew I could easily manipulate the user facing side to be extremely easy use. Using PHP I added custom pages and fields to allow for simple and easy editing. </p>
            <p>I used a mixture of CSS and Javascript to add in some simple scroll animations and using slick.js I incorporated a number of slideshows which I made editable via the user interface using PHP.</p>
        </LeftItem>
        <RightItem>
            <ScreenImage src='/imgs/case-studies/bm/bm-cms.png'/>
        </RightItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/bm/bm-video.gif'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the outcome</h3>
            <p>Benchmark are extremely happy with their new site and feels it reflects the standards of the company effectively. The site is due to be published this quarter once copy has been finalised. </p>
        </LeftItem>
    </CaseWrapper>
      
  </ContentWrapper>
);

export default BenchmarkCaseStudy;
