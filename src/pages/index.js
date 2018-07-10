import React from 'react';
import styled from 'styled-components';

import HomeGridItem from '../components/homeGridItem';
import Header from '../components/header';


const GridWrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
`

const gridContent = {
  skils: `Javascript, Typescript, CSS, SASS, ReactJS, Node.js, RxJS, PHP, AWS, HTML, 
          UX/Design, React Native, jQuery, Redux, AngularJS, DynamoDB, PostgreSQL, MySQL, 
          BEM, SMACCS, PostCSS, Webpack, gulp.js, Git`,
  about: 'Me and how I got to where I am',
  case: 'A deep dive into some of my projects',
  experience: 'A few details about my previous roles',
}

const IndexPage = () => (
  <div>
  <Header title='Alicia Collymore' bgColor='teal' subTitle='Front-End Developer'/>
  <GridWrapper>
    <HomeGridItem title='Skills' pageLink='' bg='#18435A' content={gridContent.skils} height='350px' padding='80px 50px'></HomeGridItem>
    <HomeGridItem title='About Me' pageLink='/about' bg='url("/imgs/alicia-dark.png")' content={gridContent.about} height='350px' padding='80px 50px'></HomeGridItem>
    <HomeGridItem title='Case Studies' pageLink='/caseStudies' bg='#C1C1C1' content={gridContent.case}></HomeGridItem>
    <HomeGridItem title='Experience' pageLink='/experience' bg='#F18F01' content={gridContent.experience}></HomeGridItem>
  </GridWrapper>
  </div>
);

export default IndexPage;
