import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div `
  padding: 10% 10% 5% 10%;

  @media only screen and (max-width: 667px) {
    padding-top: 20%;
  }
`


class ContentWrapper extends React.Component {
    render() {
        return ( 
            <Wrapper>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default ContentWrapper;
