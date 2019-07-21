import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { NationalNumberContext } from '../Context'

const NationalNumberButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
  border: 0;
  padding: 10px;
  min-height: 40px;
  font-weight: bold;
  transition: background-color 300ms;
  
  &:hover:not(:active) {
    background-color: #2ecc71;
  }
`

NationalNumberButton.defaultProps = {
  backgroundColor: 'transparent'
}

const NationalNumberItem = ({ children: nationalNumber }) => {
  const [ hasBeenUsed, setUsage ] = useState(false)
  return (
    <NationalNumberContext.Consumer>
      {
        ({lastUsedNationalNumber, updateLastUsedNationalNumber}) => {
          const backgroundColor = lastUsedNationalNumber === nationalNumber
            ? '#3498db'
              : hasBeenUsed
              ? '#95a5a6'
              : 'transparent'

          return (
            <CopyToClipboard text={nationalNumber} onCopy={() => {
              updateLastUsedNationalNumber(nationalNumber)
              setUsage(true)
            }}>
              <NationalNumberButton backgroundColor={backgroundColor}>{nationalNumber}</NationalNumberButton>
            </CopyToClipboard>
          )
        }
      }
    </NationalNumberContext.Consumer>
  )
}

NationalNumberItem.propTypes = {
  children: PropTypes.string
}

export default NationalNumberItem