import React from 'react'
import Flex from '../flex'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Badge from '../badge'
import _ from 'lodash'

const Item = ({ config, index, selected, onClick }) => {
  const { icon, activeIcon, name, badge, showBadge } = config

  const isActive = selected.startsWith(config.to)

  const tab = () => (
    <Flex column justifyCenter alignCenter>
      <div>
        {((isActive && !activeIcon) || (!isActive && icon)) &&
          React.cloneElement(icon, { className: 'm-tabbar-nav-icon' })}
        {isActive &&
          activeIcon &&
          React.cloneElement(activeIcon, { className: 'm-tabbar-nav-icon' })}
      </div>
      <div className='m-tabbar-nav-name'>{name}</div>
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
  onClick: _.noop,
}

export default Item