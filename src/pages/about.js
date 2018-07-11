import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import Header from '../components/header';
import Footer from '../components/footer';
import ContentWrapper from '../components/contentWrapper';

const Wrapper = styled.div`
  padding: 0 15%;

  @media only screen and (max-width: 667px) {
    padding: 0%;
  }
`

const SubTitle = styled.h2 `
  margin-top: 80px;
`

const SecondPage = () => (
  <div>
    <Header title='A litte bit about me' bgColor='url("/imgs/alicia-dark.png")' subTitle=''/>
    <ContentWrapper>
      <Wrapper>
        <h2>Who I am</h2>
        <p>Hi, I’m alicia, let's keep things friendly and casual, I love to travel and to take part in new experiences. I tend to strive for perfection in everything I do and believe my obsession with organisation allows me to succeed.</p>
        <p>I believe in discipline over motivation, ensuring even on my worst days I get stuff done, that being said it's important to know when to rest and mental and physical health are of the utmost importance to me.</p>
        <p>I enjoy thinking of solutions to problems, I love a clean easy to use UI and I try to ensure this reflects across my work. My need for cleanliness and ease ricochets across my life from my appearance to my code, messy code give me anxiety, clean and reusable code makes me happy!</p>
        <SubTitle>What I’ve Done</SubTitle>
        <p>I’ve always been interested in the way things work so when I was first exposed to the internet I was immediately intrigued as to how a web page was created, I set myself a mission to find out.</p>
        <p>Fast forward a few years and I'm working in a bike shop pretty bummed out that I'm not a hot shot developer, a unique opportunity arises where I was offered a web developer role for a startup company, I was the first developer for a web development company specialising in sites for sole traders.</p>
        <p>After working for soletrader.com for 3 years and helping to build it into a well established player in the DIFM web space I decided it was time to experience something new.</p>
        <p>I joined youview TV as a software engineer in the hopes of picking up more experience in a larger tech company, I was exposed to new process and quickly settled in, I was given key projects to work on and eventually got chosen to be on the Innovation team to lead a major front end project.</p>
        <SubTitle>Where I’m going</SubTitle>
        <p>I love to code and to learn, I am open to all career paths and would particularly like to pursue the roll of tech lead in the future. I am particularly interested in fintech and the cryptocurrency market as, I feel like the financial world could do with a massive tech renovation and I would love to be on the forefront of this.</p>
      </Wrapper>
    </ContentWrapper>
    <Footer/>
  </div>
);

export default SecondPage
