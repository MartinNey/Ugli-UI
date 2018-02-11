import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '@style/Toast/index.sass'
import { warning } from '@shared/warning'
import { computeSize, validateSize } from '@shared/size'

class Toast extends Component {
  static propTypes = {
    colorLeft: PropTypes.string,
    colorRight: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    text: PropTypes.shape({
      content: PropTypes.string,
      fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      color: PropTypes.string,
      fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
    gradientStyle: PropTypes.string,
  }
  // #9795F0
  // #FBC8D4
  static defaultProps = {
    colorLeft: '#9795F0',
    colorRight: '#FBC8D4',
    height: '50',
    width: '250',
    text: {
      prop: true,
      content: 'Toast',
      fontSize: '40',
      color: 'white',
      fontWeight: '900',
    },
    gradientStyle: 'to bottom right',
  }
  componentWillReceiveProps({ height, width }) {
    warning(validateSize(height), `Bad size ${height}`)
    warning(validateSize(width), `Bad size ${width}`)
  }
  render() {
    const { colorLeft, colorRight, height, width, text, gradientStyle, ...other } = this.props
    const heightComputed = computeSize(height)
    const widthComputed = computeSize(width)
    const textFontSizeComputed = computeSize(text.fontSize)
    if (text.prop) {
      return (
        <div className={styles['ugli-toast']}
          style={{
               height: heightComputed,
               width: widthComputed,
               background: `linear-gradient(${gradientStyle}, ${colorLeft},${colorRight})`,
             }}
          {...other}
        >
          <p className={styles['ugli-toast-text']}
            style={{
              lineHeight: heightComputed,
              color: text.color,
              fontSize: textFontSizeComputed,
              fontWeight: text.fontWeight,
            }}
          >
            {text.content}
          </p>
        </div>
      )
    }
    return (
      <div className={styles['ugli-toast']}
        style={{
               height: heightComputed,
               width: widthComputed,
               background: `linear-gradient(${gradientStyle}, ${colorLeft},${colorRight})`,
             }}
        {...other}
      />
    )
  }
}

export default Toast
