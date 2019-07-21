import React from 'react'
import List from '../components/List'
import NationalNumberItem from './NationalNumberItem'
import NationalNumberContextProvider from '../Context'

const NationalNumberList = ({nationalNumbers}) => {
  return (
    <NationalNumberContextProvider>
      <List>
        {
          nationalNumbers.map(nationalNumber => (
            <NationalNumberItem key={nationalNumber}>{nationalNumber}</NationalNumberItem>
          ))
        }
      </List>
    </NationalNumberContextProvider>
  )
}

export default NationalNumberList