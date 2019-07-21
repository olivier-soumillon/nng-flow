import styled from 'styled-components'

const ListHeader = styled.header`
  display: flex;
  flex: 1;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #34495e;
  cursor: pointer;
  
  &:hover {
    background-color: #2ecc71;
  }
`

export default ListHeader