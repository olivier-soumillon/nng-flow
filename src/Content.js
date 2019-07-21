import React from 'react'
import GlobalStyle from './GlobalStyle'
import TextField from './components/TextField'
import FormPanel from './components/FormPanel'
import Label from './components/Label'
import LeftIcon from './components/LeftIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faHeart } from '@fortawesome/free-solid-svg-icons'
import BirthDateValidationProvider from './renderProps/BirthDateValidationProvider'
import Footer from './components/Footer'
import ResultPanel from './parts/ResultPanel'

const INPUT_BIRTH_DATE_MASK = '99/99/9999'

const App = () => (
  <>
    <BirthDateValidationProvider>
      {
        ({ birthDate, onBirthDateChange, isBirthDatePristine, isBirthDateChanging, isBirthDateValid }) => (
          <>
            <FormPanel>
              <Label htmlFor="birthDate">
                <LeftIcon icon={faBirthdayCake}/>
                Birth date
              </Label>
              <TextField name="birthDate"
                         mask={INPUT_BIRTH_DATE_MASK}
                         alwaysShowMask
                         value={birthDate}
                         onChange={onBirthDateChange}/>
            </FormPanel>
            <ResultPanel isBirthDatePristine={isBirthDatePristine}
                         isBirthDateChanging={isBirthDateChanging}
                         isBirthDateValid={isBirthDateValid}
                         birthDate={birthDate}/>
            <Footer>Developed with <FontAwesomeIcon icon={faHeart} /> by Olivier Soumillon</Footer>
          </>
        )
      }
    </BirthDateValidationProvider>
    <GlobalStyle/>
  </>
)

export default App