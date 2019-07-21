import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import ListHeadersWrapper from '../components/ListHeadersWrapper'
import ListHeader from '../components/ListHeader'
import ScrollView from '../components/ScrollView'
import NationalNumbersList from './NationalNumbersList'
import NationalNumberContextProvider from '../Context'
import Text from '../components/Text'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const formatListToCopy = (list) => list.join(',').replace(/,/g, '\r\n')

const NationalNumbersPanel = ({ femaleNationalNumbers, maleNationalNumbers }) => {
  return (
    <>
      <ListHeadersWrapper>
        <CopyToClipboard text={formatListToCopy(maleNationalNumbers)}
                         onCopy={() => {toast.success(`Whole male list copied !`)}}>
          <ListHeader backgroundColor='skyblue'>
            <FontAwesomeIcon size="2x" icon={faMars}/>
            <Text>Male</Text>
          </ListHeader>
        </CopyToClipboard>
        <CopyToClipboard text={formatListToCopy(femaleNationalNumbers)}
                         onCopy={() => {toast.success(`Whole female list copied !`)}}>
          <ListHeader backgroundColor='pink'>
            <FontAwesomeIcon size="2x" icon={faVenus}/>
            <Text>Female</Text>
          </ListHeader>
        </CopyToClipboard>
      </ListHeadersWrapper>
      <ScrollView>
        <NationalNumberContextProvider>
          <NationalNumbersList nationalNumbers={maleNationalNumbers}/>
          <NationalNumbersList nationalNumbers={femaleNationalNumbers}/>
        </NationalNumberContextProvider>
      </ScrollView>
    </>
  )
}

export default NationalNumbersPanel