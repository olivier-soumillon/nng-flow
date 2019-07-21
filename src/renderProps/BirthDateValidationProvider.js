import { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const VALIDATION_DELAY = 700
const CLEAN_BIRTH_DATE_FORMAT = 'DDMMYYYY'

class BirthDateValidationProvider extends Component {
  state = {
    birthDate: '',
    isBirthDatePristine: true,
    isBirthDateChanging: false,
    isBirthDateValid: true
  }

  isBirthDateValid = (birthDate) => {
    const cleanBirthDate = birthDate.replace(/[^0-9]+/g, '')
    return cleanBirthDate.length === 8 && moment(cleanBirthDate, CLEAN_BIRTH_DATE_FORMAT).isValid()
  }

  validateBirthDate = () => {
    this.clearValidationTimeout()

    this.setState(prevState => ({
      isBirthDateChanging: false,
      isBirthDateValid: this.isBirthDateValid(prevState.birthDate)
    }))
  }

  clearValidationTimeout = () => {
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout)
    }
  }

  programValidationWithDelay = () => {
    this.clearValidationTimeout()
    this.validationTimeout = setTimeout(this.validateBirthDate, VALIDATION_DELAY)
  }

  onBirthDateChange = (event) => {
    const changes = {
      birthDate: event.target.value,
      isBirthDatePristine: false,
      isBirthDateChanging: true,
      isBirthDateValid: true
    }

    this.setState(changes, this.programValidationWithDelay)
  }

  render () {
    console.log('BirthDateValidationProvider :: render')

    const bundle = {
      onBirthDateChange: this.onBirthDateChange,
      birthDate: this.state.birthDate,
      isBirthDatePristine: this.state.isBirthDatePristine,
      isBirthDateChanging: this.state.isBirthDateChanging,
      isBirthDateValid: this.state.isBirthDateValid
    }

    return this.props.children(bundle)
  }
}

BirthDateValidationProvider.propTypes = {
  children: PropTypes.func.isRequired
}

export default BirthDateValidationProvider
