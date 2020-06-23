import React from 'react'
import _noop from 'lodash/noop'
import _map from 'lodash/map'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Item from './item'
import { Flex } from '@gm-mobile/components'

const Tabbar = ({ configs, selected, onTabChange, className, ...rest }) => {
  return (
    <Flex {...rest} className={classNames('m-tabbar', className)}>
      {_map(configs, (config, index) => (
        <Item
          key={index}
          config={config}
          index={index}
          onClick={onTabChange}
          selected={selected}
        />
      ))}
    </Flex>
  )
}

Tabbar.propTypes = {
  /** tabbar 配置 [{ name, to, icon, activeIcon, badge, showBadge}] */
  configs: PropTypes.array.isRequired,
  /** pathname，根据 config.to 匹配 */
  selected: PropTypes.string.isRequired,
  /** tab 点击回调 */
  onTabChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

Tabbar.defaultProps = {
  onTabChange: _noop,
}

export default Tabbar