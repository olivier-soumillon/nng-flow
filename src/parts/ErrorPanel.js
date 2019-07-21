import React from 'react'
import Panel from '../components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

const ErrorPanel = () => {
  return (
    <Panel>
      <FontAwesomeIcon size="2x" icon={faSkullCrossbones}/>
      <p>This birth date is invalid</p>
    </Panel>
  )
}

export default ErrorPanel