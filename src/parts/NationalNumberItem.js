import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { NationalNumberContext } from '../Context'

const NationalNumberButton = styled.button`
  background-color: ${props => props.backgroundColor}
  border: 0;
  padding: 10px;
  min-height: 40px;
  font-weight: bold;
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
            ? 'limegreen'
            : hasBeenUsed
              ? 'lightgreen'
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