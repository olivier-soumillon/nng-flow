// @flow

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import range from 'lodash.range'

const isOddNumber = (number: number): boolean => number % 2 === 0
const padNumber = (number: number, size: number): string => (`000${number}`).slice(-size)
const formatNationalNumber = (nationalNumber: string): string => nationalNumber.replace(/^(\d{2})(\d{2})(\d{2})(\d{3})(\d{2}).*/, '$1.$2.$3-$4.$5')

const GENDER_KEY_FEMALE = 'female'
const GENDER_KEY_MALE = 'male'
const INPUT_BIRTH_DATE_FORMAT = 'DD/MM/YYYY'
const NORMALIZED_BIRTH_DATE_FORMAT = 'YYMMDD'
const SERIAL_NUMBER_SIZE = 3
const CHECKSUM_SIZE = 2
const CHECKSUM_BASE = 97

/*::
type Props = {
  birthDate: string,
  children: Function
}
*/
class NationalNumbersProvider extends PureComponent/*:: <Props>*/ {
  concatChecksum = (birthDate/*: Object*/, formattedSerialNumber/*: string*/)/*: string*/ => {
    const formattedBirthDate = birthDate.format(NORMALIZED_BIRTH_DATE_FORMAT)
    const nationalNumberPrefix = `${formattedBirthDate}${formattedSerialNumber}`
    const millenialMod = birthDate.year() >= 2000 ? 2000000000 : 0
    const checkSum = CHECKSUM_BASE - (millenialMod + Number(nationalNumberPrefix)) % CHECKSUM_BASE
    const formattedCheckSum = padNumber(checkSum, CHECKSUM_SIZE)

    return `${nationalNumberPrefix}${formattedCheckSum}`
  }

  populateNationalNumbersCollection = (birthDate/*: Object*/)/*: Function*/ => {
    return (collection/*: Object*/, serialNumber/*: number*/)/*: Object*/ => {
      const genderKey = isOddNumber(serialNumber) ? GENDER_KEY_FEMALE : GENDER_KEY_MALE
      const formattedSerialNumber = padNumber(serialNumber, SERIAL_NUMBER_SIZE)
      const nationalNumber = this.concatChecksum(birthDate, formattedSerialNumber)
      const formattedNationalNumber = formatNationalNumber(nationalNumber)
      return {
        ...collection,
        [genderKey]: [...collection[genderKey], formattedNationalNumber]
      }
    }
  }

  generateNationalNumbers = (birthDate/*: string*/)/*: Object*/ => {
    const date = moment(birthDate, INPUT_BIRTH_DATE_FORMAT)

    const collection = {
      [GENDER_KEY_FEMALE]: [],
      [GENDER_KEY_MALE]: []
    }

    return range(0, 1000).reduce(this.populateNationalNumbersCollection(date), collection)
  }

  render () {
    const collection = this.generateNationalNumbers(this.props.birthDate)

    const bundle = {
      femaleNationalNumbers: collection[GENDER_KEY_FEMALE],
      maleNationalNumbers: collection[GENDER_KEY_MALE]
    }

    return this.props.children(bundle)
  }
}

NationalNumbersProvider.propTypes = {
  birthDate: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default NationalNumbersProvider
