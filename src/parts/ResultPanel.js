import React from 'react'
import NationalNumbersProvider from '../renderProps/NationalNumbersProvider'
import NationalNumbersPanel from './NationalNumbersPanel'
import DefaultPanel from './DefaultPanel'
import LoadingPanel from './LoadingPanel'
import ErrorPanel from './ErrorPanel'

const ResultPanel = ({ birthDate, isBirthDatePristine, isBirthDateChanging, isBirthDateValid }) => {

  if (isBirthDatePristine) {
    return <DefaultPanel/>
  }

  if (isBirthDateChanging) {
    return <LoadingPanel/>
  }

  if (!isBirthDateValid) {
    return <ErrorPanel/>
  }

  return (
    <NationalNumbersProvider birthDate={birthDate}>
      {
        ({ femaleNationalNumbers, maleNationalNumbers }) => {
          return (
            <NationalNumbersPanel femaleNationalNumbers={femaleNationalNumbers}
                                  maleNationalNumbers={maleNationalNumbers}/>
          )
        }
      }
    </NationalNumbersProvider>
  )
}

export default ResultPanel