import React from 'react'
import styled from 'styled-components';


const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  padding: 20px;
`

class LeftItem extends React.Component {
    render() {
        return ( 
            <Item>
                {this.props.children}
            </Item>
        );
    }
}

export default LeftItem;
