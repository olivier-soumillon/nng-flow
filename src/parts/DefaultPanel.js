import React from 'react'
import Panel from '../components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const DefaultPanel = () => {
  return (
    <Panel>
      <FontAwesomeIcon size="2x" icon={faArrowUp}/>
      Please enter a birth date, thx !
    </Panel>
  )
}

export default DefaultPanel