import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const ItalicP = styled.p`
    font-style: italic;
`


const ItalicPara = ({para}) => (
    <ItalicP>{para}</ItalicP>
);

export default ItalicPara;
