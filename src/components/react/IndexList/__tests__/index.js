import React from 'react'
import renderer from 'react-test-renderer'
import IndexList from '../index'

describe('IndexList', () => {
  it('snake spinner render without crash', () => {
    const component = renderer.create(<IndexList />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
