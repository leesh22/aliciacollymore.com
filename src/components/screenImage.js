import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


const Img = styled.img`
    width: 90%;
    border-radius: 3px;
    margin-bottom: 0;
`

const ScreenImage = ({src}) => (
    <Img src={src}/>
);

export default ScreenImage;
