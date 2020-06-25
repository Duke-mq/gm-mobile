import React from 'react'
import PropTypes from 'prop-types'

import BaseCalendar from './base'
import { TYPE } from './util'

const Calendar = ({ selected, onSelect, ...rest }) => {
  const handleSelect = (selected) => {
    onSelect(selected[0])
  }

  return (
    <BaseCalendar
      {...rest}
      selected={[selected]}
      onSelect={handleSelect}
      type={TYPE.ONE}
    />
  )
}

Calendar.propTypes = {
  /** 当前选中日期 */
  selected: PropTypes.object,
  /** 回调函数 */
  onSelect: PropTypes.func,
  /** 可选日期最小值 */
  min: PropTypes.object,
  /** 可选日期最大值 */
  max: PropTypes.object,
  /** 自定义不可选日期 */
  disabledDate: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Calendar
