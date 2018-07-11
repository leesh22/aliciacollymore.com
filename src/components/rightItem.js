import React from 'react'
import styled from 'styled-components';


const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

  @media only screen and (max-width: 812px) {
    align-items: start;
  }
`

class RightItem extends React.Component {
    render() {
        return ( 
            <Item>
                {this.props.children}
            </Item>
        );
    }
}

export default RightItem;
