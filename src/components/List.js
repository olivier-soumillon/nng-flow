import styled from 'styled-components'

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  :first-of-type {
    border-right: 1px solid transparent;
  }
  :not(:first-of-type) {
    border-left: 1px solid transparent;
  }
`

export default List