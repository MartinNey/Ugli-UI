/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'

import styles from '@style/IndexList/index.sass'

function dataSort(data) {
  const sections = []

  for (let i = 0; i < 26; i += 1) {
    sections[String.fromCharCode(65 + i)] = []
  }

  data.forEach((item) => {
    // bug: Chinese string
    sections[item.charAt(0).toUpperCase()].push(item)
  })

  for (let i = 0; i < 26; i += 1) {
    if (sections[String.fromCharCode(65 + i)].length) {
      sections[String.fromCharCode(65 + i)]
        .sort((a, b) => a.localeCompare(b))
    }
  }

  return sections
}


class IndexList extends Component {
  // todo: scrollBar

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  scrollTo = (letter) => {
    this.indexList.scrollTop += this.section[letter].getBoundingClientRect().top -
      this.indexList.getBoundingClientRect().top
  }

  section = {}

  render() {
    const dataSections = dataSort(this.props.data)
    const list = []
    const nav = []

    for (let i = 0; i < 26; i += 1) {
      const letter = String.fromCharCode(65 + i)
      if (dataSections[letter].length) {
        nav.push(letter)
        list.push(
          <div className={styles['index-list-section']}>
            <div
              ref={el => this.section[letter] = el}
              className={styles['index-list-section-header']} // this.state.activeSection?
            >
              {letter}
            </div>
            <div className={styles['index-list-section-body']}>
              {dataSections[letter].map(item => (
                <div className={styles['index-list-section-item']}>{item}</div>
              ))}
            </div>
          </div>
        )
      }
    }

    const navList = (
      <ul className={styles['index-list-nav']}>
        {nav.map(letter => (<li onClick={() => this.scrollTo(letter)}>{letter}</li>))}
      </ul>
    )

    return (
      <div className={styles['index-list-container']}>
        <div ref={el => this.indexList = el} className={styles['index-list']}>
          {list}
        </div>
        {navList}
        <div ref={el => this.scrollBar = el} className={styles['index-list-nav-scroll-bar']} />
      </div>
    )
  }
}

export default IndexList
