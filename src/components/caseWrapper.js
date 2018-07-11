import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &:hover a {
    color: teal;
    transition: 0.3s;
  }

  @media only screen and (max-width: 812px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 50px;
  }
`


class CaseWrapper extends React.Component {
    render() {
        return ( 
            <Wrapper>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default CaseWrapper;
