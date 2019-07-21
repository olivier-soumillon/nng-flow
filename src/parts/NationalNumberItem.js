import React from 'react'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styled from 'styled-components'

const NationalNumberButton = styled.button`
  border: 0;
  background: transparent;
  padding: 10px;
  min-height: 40px;
  font-weight: bold;
`

const NationalNumberItem = ({ children: nationalNumber }) => {
  return (
    <CopyToClipboard text={nationalNumber}>
      <NationalNumberButton>{nationalNumber}</NationalNumberButton>
    </CopyToClipboard>
  )
}

NationalNumberItem.propTypes = {
  children: PropTypes.string
}

export default NationalNumberItem