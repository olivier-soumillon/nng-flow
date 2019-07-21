import React, { Component } from 'react'
import {usedNationalNumbers, NationalNumbersContext} from './Context'
import Content from './Content'

class WithContext extends Component {
  addUsedNationalNumber = (nationalNumber) => {
    console.log('addUsedNationalNumber', nationalNumber)
    this.setState(prevState => ({
      usedNationalNumbers: [...prevState.usedNationalNumbers, nationalNumber]
    }))
  }

  state = {
    usedNationalNumbers,
    addUsedNationalNumber: this.addUsedNationalNumber
  }

  render () {
    return (
      <NationalNumbersContext.Provider value={this.state}>
        <Content/>
      </NationalNumbersContext.Provider>
    )
  }
}

export default App