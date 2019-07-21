import React, { Component } from 'react'

export const initialContext = ''

export const NationalNumberContext = React.createContext(initialContext)

class NationalNumberContextProvider extends Component {
  updateLastUsedNationalNumber = (nationalNumber) => {
    this.setState({
      lastUsedNationalNumber: nationalNumber
    })
  }

  state = {
    lastUsedNationalNumber: initialContext,
    updateLastUsedNationalNumber: this.updateLastUsedNationalNumber
  }

  render() {
    return (
      <NationalNumberContext.Provider value={this.state}>
        {this.props.children}
      </NationalNumberContext.Provider>
    );
  }
}

export default NationalNumberContextProvider