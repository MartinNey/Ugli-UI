import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '@style/Indicator/index.sass'
import { warning } from '@shared/warning'
import { computeSize, validateSize } from '@shared/size'

class Spinner extends Component {
  static propTypes = {
    textRequired: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    style: PropTypes.shape(),
    text: PropTypes.string,
    textClass: PropTypes.string,
  }
  static defaultProps = {
    textRequired: true,
    color: 'aqua',
    size: '16',
    style: {},
    text: 'Loading...',
    textClass: 'spinner-text',
  }
  componentWillReceiveProps({ size }) {
    warning(validateSize(size), `Bad size ${size}`)
  }
  render() {
    const { textRequired, color, size, style, text, textClass, ...other } = this.props
    const sizeComputed = computeSize(size)
    return (
      <div>
        <div
          className={styles['ugli-spinner']}
          style={{
            borderTopColor: color,
            borderLeftColor: color,
            borderBottomColor: color,
            height: sizeComputed,
            width: sizeComputed,
            ...style,
          }}
          {...other}
        />
        {textRequired &&
        <div className={textClass}>
          {text}
        </div>}
      </div>
    )
  }
}

export default Spinner
