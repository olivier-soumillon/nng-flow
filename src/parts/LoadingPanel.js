import React from 'react'
import Panel from '../components/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation } from '@fortawesome/free-solid-svg-icons'

const LoadingPanel = () => {
  return (
    <Panel>
      <FontAwesomeIcon size="2x" icon={faRadiation} spin/>
      Loading
    </Panel>
  )
}

export default LoadingPanel