import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 100px;
`
const BackLink = styled(Link)`
  position: absolute;
  top: 30px;

  & img {
    width: 30px;
  }
`

const Title = styled.div `
  margin: 0;
`

const CsIntro = ({title, stack}) => (
    <Wrapper>
        <BackLink to='/case-studies'><img src='/imgs/back-arrow.png'/></BackLink>
        <Title>Case Study</Title>
        <h1>{title}</h1>
        <p>{stack}</p>
    </Wrapper>
);

export default CsIntro;
