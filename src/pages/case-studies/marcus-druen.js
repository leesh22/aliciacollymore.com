import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../components/contentWrapper';
import CsIntro from '../../components/csIntro';
import CaseWrapper from '../../components/caseWrapper';
import LeftItem from '../../components/leftItem';
import RightItem from '../../components/rightItem';
import ScreenImage from '../../components/screenImage';
import ItalicPara from '../../components/ItalicPara';


const MarcusDruenCaseStudy = () => (
  <ContentWrapper>
    <CsIntro title='Marcus Druen' stack='PHP, Javascript, JQuery, Wordpress, HTML, CSS'/>
    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/md/md-home.png'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the problem</h3>
            <p>Marcus Druen is a business consultant who works with reputable business to improve the way they manage staff.</p>
            <p>Marcus came to me with the main issue of not being able to access or update his website effectively and not understanding how his website worked, he hired me to rebuild his Wordpress website with an 'easy to use' theme.</p>
        </LeftItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <h3>What was the solution</h3>
            <p>Working closely with Marcus I quickly identified the key areas of the website he would like to be able to update and have control over, I transferred his domain and website from his previous provider onto his own hosting account allow him to better manage his assets.</p>
            <p>I built out a custom theme which replicated the design of his previous site and used the Wordpress API to add custom fields which allows Marcus to easily edit and manage his website. With Wordpress templating, I built Marcus a reusable landing page which he is able to tailor for each potential client. </p>
            <p>Using jQuery and CSS I added a number of small features including accordions, tabs and customs animations. Utilising CSS I ensured the website is fully responsive and works well on all major devices and browsers. </p>
        </LeftItem>
        <RightItem>
            <ScreenImage src='/imgs/case-studies/md/md-mid.png'/>
        </RightItem>
    </CaseWrapper>

    <CaseWrapper>
        <LeftItem>
            <ScreenImage src='/imgs/case-studies/md/md-video.gif'/>
        </LeftItem>
        <LeftItem>
            <h3>What was the outcome</h3>
            <p>Marcus was thrilled with the changes, he is able to create tailored landing pages on the fly and add blog posts with ease. I have since built 2 more websites for Marcus' various business to help facilitate their growth and online presence.</p>  
        </LeftItem>
    </CaseWrapper>
      
  </ContentWrapper>
);

export default MarcusDruenCaseStudy;
