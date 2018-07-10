import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const StyledLink = styled(Link) `
  color: white;
  text-decoration: none;
`

const GridTitle = styled.h3 `
  color: white;

  transition: 0.5s;
`

const GridContent = styled.div`
  color: white;
  position: absolute;
  bottom: 50px;
`

const GridItemWrap = styled.div`
  padding: 50px;
  height: 300px;
  position: relative;

  &:hover ${GridTitle} {
    margin-top: 0;
  }
`;

const StaticGridContent = styled.div`
  color: white;
  position: absolute;
  width: 80%;
  top: 130px;
`

const StaticGridTitle = styled.h3 `
  color: white;
`

const HomeGridItem = ({ title, pageLink, bg, content, height, padding}) =>{
  if(!pageLink) {
   return ( 
      <GridItemWrap style={{background: bg, backgroundSize: 'cover', height: height, padding: padding}}>
          <StaticGridTitle>{title}</StaticGridTitle>
          <StaticGridContent>{content}</StaticGridContent>
      </GridItemWrap>)
  } else {
    return (
      <StyledLink to={pageLink}>
        <GridItemWrap style={{background: bg, backgroundSize: 'cover', height: height, padding: padding}}>
          <GridTitle>{title}</GridTitle>
          <GridContent>{content}</GridContent>
        </GridItemWrap>
      </StyledLink>
    )
  }
}
  
  export default HomeGridItem
  