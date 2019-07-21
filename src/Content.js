import React, { PureComponent } from 'react'
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
import Layout from './components/Layout'

const INPUT_BIRTH_DATE_MASK = '99/99/9999'

class App extends PureComponent {
  textFieldRef = React.createRef()

  componentDidMount () {
    this.textFieldRef.current.getInputDOMNode().focus()
  }

  render () {
    return (
      <Layout>
        <BirthDateValidationProvider>
          {
            ({ birthDate, onBirthDateChange, isBirthDatePristine, isBirthDateChanging, isBirthDateValid }) => (
              <>
                <FormPanel>
                  <Label htmlFor="birthDate">
                    <LeftIcon icon={faBirthdayCake}/>
                    Birth date
                  </Label>
                  <TextField ref={this.textFieldRef}
                             name="birthDate"
                             mask={INPUT_BIRTH_DATE_MASK}
                             alwaysShowMask
                             value={birthDate}
                             onChange={onBirthDateChange}/>
                </FormPanel>
                <ResultPanel isBirthDatePristine={isBirthDatePristine}
                             isBirthDateChanging={isBirthDateChanging}
                             isBirthDateValid={isBirthDateValid}
                             birthDate={birthDate}/>
                <Footer>Developed with <FontAwesomeIcon icon={faHeart} color='#9b59b6' /> by Olivier Soumillon</Footer>
              </>
            )
          }
        </BirthDateValidationProvider>
        <GlobalStyle/>
      </Layout>
    )
  }
}

export default App