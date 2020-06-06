import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { View } from '@tarojs/components'

const Badge = (props) => {
  const {
    children,
    count,
    className,
    corner,
    dot,
    overflowCount,
    showOverflow,
    ...rest
  } = props

  const badgeCls = classNames('m-badge', className)

  const textCls = classNames({
    'm-badge-dot': dot,
    'm-badge-text': !dot,
    'm-badge-round': !showOverflow && overflowCount < 100,
    'm-badge-corner': corner,
  })

  let displayText = !dot ? count : ''

  if (count > overflowCount) {
    displayText = overflowCount + (showOverflow ? '+' : '')
  }

  return (
    <View {...rest} className={badgeCls}>
      {children}
      <View className={textCls}>{displayText}</View>
    </View>
  )
}

Badge.propTypes = {
  /** 徽章显示的数字 */
  count: PropTypes.number,
  /** 是否仅显示红点 */
  dot: PropTypes.bool,
  /** 是否在子元素右上角显示徽章数 */
  corner: PropTypes.bool,
  /** 徽章显示的最大数值 */
  overflowCount: PropTypes.number,
  /** 是否显示 '+' 表示数值溢出 */
  showOverflow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

Badge.defaultProps = {
  dot: false,
  corner: false,
  overflowCount: 99,
  showOverflow: false,
}

export default Badge
