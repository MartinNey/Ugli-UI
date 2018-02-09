import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Spinner from '../src/components/react/Indicator'
import Button from '../src/components/react/Button/index'
import Toast from '../src/components/react/Toast/index'
// import Calendar from '../src/components/react/Calendar/index'

storiesOf('Indicator/Default(Spinner)', module)
  .add('default', () => <Spinner />)
  .add('huge and pink', () => <Spinner size="64" color="#FA1C86" />)
  .add('huge and pink with wider border', () => <Spinner size={64} color="#FA1C86" style={{ borderWidth: '8px' }} />)
  .add('with id', () => <Spinner id="withID" />)

storiesOf('Toast/Default(Toast)', module)
  .add('default', () => <Toast />)
  .add('just color', () => <Toast colorLeft="#9795F0" colorRight="#FBC8D4" height="50" width="250" text={{ prop: false }} />)
  .add('new color & content', () => <Toast colorLeft="#3725F1" colorRight="#FBC8C4" height="50" width="250" text={{ prop: true, content: 'hello, world', color: 'blue' }} />)
  .add('with id', () => <Toast colorLeft="#9795F0" colorRight="#FBC8D4" height="50" width="250" text={{ prop: false }} id="withID" />)

const uF = raw => `(UNFINISHED) ${raw}`

storiesOf(uF('Button'), module)
  .add('default', () => <Button text="UNFINISHED Button" />)

storiesOf(uF('Calendar'), module)
  .add('default', () => <Calendar />)
