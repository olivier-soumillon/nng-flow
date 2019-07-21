import React from 'react'
import List from '../components/List'
import NationalNumberItem from './NationalNumberItem'

const NationalNumberList = ({nationalNumbers}) => {
  return (
    <List>
      {
        nationalNumbers.map(nationalNumber => (
          <NationalNumberItem key={nationalNumber}>{nationalNumber}</NationalNumberItem>
        ))
      }
    </List>
  )
}

export default NationalNumberList