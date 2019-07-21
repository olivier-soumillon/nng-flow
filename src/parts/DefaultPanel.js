import React from 'react'
import Panel from '../components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Text from '../components/Text'

const DefaultPanel = () => {
  return (
    <Panel>
      <FontAwesomeIcon size="2x" icon={faArrowUp}/>
      <Text>Please enter a birth date :)</Text>
    </Panel>
  )
}

export default DefaultPanel