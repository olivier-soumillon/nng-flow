import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import ListHeadersWrapper from '../components/ListHeadersWrapper'
import ListHeader from '../components/ListHeader'
import ScrollView from '../components/ScrollView'
import NationalNumbersList from './NationalNumbersList'

const NationalNumbersPanel = ({ femaleNationalNumbers, maleNationalNumbers }) => {
  return (
    <>
      <ListHeadersWrapper>
        <ListHeader backgroundColor='skyblue'>
          <FontAwesomeIcon size="2x" icon={faMars}/>
          Male
        </ListHeader>
        <ListHeader backgroundColor='pink'>
          <FontAwesomeIcon size="2x" icon={faVenus}/>
          Female
        </ListHeader>
      </ListHeadersWrapper>
      <ScrollView>
        <NationalNumbersList nationalNumbers={maleNationalNumbers}/>
        <NationalNumbersList nationalNumbers={femaleNationalNumbers}/>
      </ScrollView>
    </>
  )
}

export default NationalNumbersPanel