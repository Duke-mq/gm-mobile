import { getLocale } from '../../../../locales'
import React from 'react'
import map from 'lodash/map'

import Flex from '../flex'

const weekDays = [
  getLocale('日'),
  getLocale('一'),
  getLocale('二'),
  getLocale('三'),
  getLocale('四'),
  getLocale('五'),
  getLocale('六'),
]
const Week = () => {
  return (
    <Flex className='m-calendar-week'>
      {map(weekDays, (v, i) => (
        <Flex flex justifyCenter alignCenter key={i}>
          {v}
        </Flex>
      ))}
    </Flex>
  )
}

export default Week