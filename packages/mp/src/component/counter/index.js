import { getLocale } from '@gm-mobile/locales'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { View, Toast, Input } from '@gm-mobile/components'
import _isNaN from 'lodash/isNaN'
import _includes from 'lodash/includes'
import Big from 'big.js'

const text2Number = (value) => {
  if (value === '') {
    return 0
  }
  return _isNaN(parseFloat(value)) ? '' : parseFloat(value)
}

const handleErrorMsg = ({ value, min, max, precision }) => {
  let msg = null
  const cv = text2Number(value)
  if (max && cv > max) {
    msg = `${getLocale('请输入小于')} ${max} ${getLocale('的数')}`
  } else if (min && cv < min) {
    msg = `${getLocale('请输入大于')} ${min} ${getLocale('的数')}`
  }

  if (min && max && msg) {
    msg = `${getLocale('请输入大于')} ${min} ${getLocale(
      '小于'
    )} ${max} ${getLocale('的数')}`
  }

  // 精度校验
  const num = value.split('.')
  if (num.length > 1 && num[1].length > precision) {
    msg =
      msg ||
      `${getLocale('最多只能输入小数点后')} ${precision} ${getLocale('位')}`
  }
  return msg
}

const Counter = ({
  value,
  min,
  max,
  onChange,
  focus,
  disabled,
  getErrorMsg,
  precision,
  adjustPosition,
  className,
  ...rest
}) => {
  const [selfValue, setSelfValue] = useState(value)
  useEffect(() => {
    setSelfValue(value)
  }, [value])

  const plusDisabled = !disabled && max && text2Number(selfValue) >= max
  const minusDisabled =
    !disabled && (selfValue === '' || text2Number(selfValue) === 0)

  // 检验是否超出大小值限制
  const checkValue = (value, type) => {
    if (max && value > max) {
      return value - 1
    }

    if (min && value < min) {
      if (type === 'plus') {
        return min
      }
      return 0
    }

    return value
  }

  const handleChange = (type) => {
    if (disabled) {
      return
    }

    let v = text2Number(selfValue)
    const _precision = _includes(selfValue, '.') ? precision : 0
    if (type === 'minus') {
      if (minusDisabled) return
      // 小于0时展示为0不变
      v = v - 1 < 0 ? 0 : v - 1
      const cv = Big(checkValue(v, type)).toFixed(_precision)
      onChange(cv)
      return
    }
    if (plusDisabled) return
    // 如果存在最小值，以最小值开始相加
    v = v + 1
    if (min && selfValue === '') {
      v = min
    }
    const cv = Big(checkValue(v, type)).toFixed(_precision)
    onChange(cv)
  }

  const handleInput = (e) => {
    const { value } = e.detail

    // 优化交互体验,0和空均代表不添加商品
    if (value !== '') {
      checkError(value)
    }
    setSelfValue(value)
  }

  const checkError = (v) => {
    const mes = getErrorMsg({ value: v, min, max, precision })
    mes && Toast.tip(mes)
  }

  const handleFinally = () => {
    onChange(selfValue)
  }

  return (
    <View
      {...rest}
      className={classNames(
        'm-counter m-counter-default',
        {
          disabled,
        },
        className
      )}
    >
      <View
        className={classNames('m-font m-font-minus-circle m-counter-minus', {
          disabled: minusDisabled,
        })}
        onClick={() => handleChange('minus')}
      />
      <Input
        className='m-counter-content-text'
        type='digit'
        disabled={disabled}
        value={selfValue}
        focus={focus}
        adjustPosition={adjustPosition}
        onInput={handleInput}
        onBlur={handleFinally}
        onConfirm={handleFinally}
      />
      <View
        className={classNames('m-font m-font-plus-circle m-counter-plus', {
          disabled: plusDisabled,
        })}
        onClick={() => handleChange('plus')}
      />
    </View>
  )
}

Counter.propTypes = {
  /** 展示值 */
  value: PropTypes.string,
  /** 最小值, 默认为0 */
  min: PropTypes.number,
  /** 最大值 */
  max: PropTypes.number,
  precision: PropTypes.number,
  /** +/- 号回调，数字确认键盘及失焦回调 */
  onChange: PropTypes.func.isRequired,
  /** 获取焦点, 微信版本 6.3.30, focus 属性设置无效 */
  focus: PropTypes.bool,
  /** 禁用状态 */
  disabled: PropTypes.bool,
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: PropTypes.bool,
  /** 触发最小或最大值时，回调 */
  getErrorMsg: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

Counter.defaultProps = {
  value: '',
  min: 0,
  precision: 2,
  getErrorMsg: handleErrorMsg,
}

export default Counter
