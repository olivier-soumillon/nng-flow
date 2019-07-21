import styled from 'styled-components'

const ScrollView = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: row;
  border: 1px solid #34495e;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #2c3e50; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ecf0f1; 
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #ecf0f1; 
  }
`

export default ScrollView