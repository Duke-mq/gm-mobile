import React from 'react'
import noop from 'lodash/noop'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Flex from '../flex'
import Badge from '../badge'
import View from '../view'

const Item = ({ config, index, selected, onClick }) => {
  const { icon, activeIcon, name, badge, showBadge } = config

  const isActive = selected.startsWith(config.to)

  const tab = () => (
    <Flex column justifyCenter alignCenter>
      <View>
        {((isActive && !activeIcon) || (!isActive && icon)) &&
          React.cloneElement(icon, {
            className: classNames('m-tabbar-nav-icon', icon.props.className),
          })}
        {isActive &&
          activeIcon &&
          React.cloneElement(activeIcon, {
            className: classNames(
              'm-tabbar-nav-icon',
              activeIcon.props.className
            ),
          })}
      </View>
      <View className='m-tabbar-nav-name'>{name}</View>
    </Flex>
  )

  const handleClick = () => {
    onClick(config, index)
  }

  return (
    <Flex
      key={index}
      column
      alignCenter
      justifyCenter
      className={classNames('m-tabbar-nav', {
        active: isActive,
      })}
      flex
      onClick={handleClick}
    >
      {showBadge && badge ? <Badge {...badge}>{tab()}</Badge> : tab()}
    </Flex>
  )
}

Item.propTypes = {
  config: PropTypes.object.isRequired,
  index: PropTypes.number,
  selected: PropTypes.string,
  onClick: PropTypes.func,
}

Item.defaultProps = {
  onClick: noop,
}

const Tabbar = ({ configs, selected, onTabChange, className, ...rest }) => {
  return (
    <Flex {...rest} className={classNames('m-tabbar', className)}>
      {map(configs, (config, index) => (
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
  onTabChange: noop,
}

export default Tabbar