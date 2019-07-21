import React from 'react'
import Panel from '../components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import Text from '../components/Text'

const ErrorPanel = () => {
  return (
    <Panel>
      <FontAwesomeIcon size="2x" icon={faSkullCrossbones}/>
      <Text>This birth date is invalid</Text>
    </Panel>
  )
}

export default ErrorPanel