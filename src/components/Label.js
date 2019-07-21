import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
  margin-bottom: 10px;
`

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
}

export default Label