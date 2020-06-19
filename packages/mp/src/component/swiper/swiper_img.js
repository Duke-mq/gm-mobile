import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperItem } from '@tarojs/components'
import _map from 'lodash/map'
import { View } from '@gm-mobile/components'

import Image from '../image'
import SwiperPagination from './swiper_pagination'

const SwiperImg = ({ data, options, ...rest }) => {
  const _data = _map(data, (d) => d.img)
  const init = _data.length ? _data[0] : null
  const [current, setCurrent] = useState(init)

  const handleChange = (e) => {
    const { currentItemId } = e.detail
    if (currentItemId !== current) {
      setCurrent(currentItemId)
    }
  }

  return (
    <View {...rest}>
      <Swiper autoplay {...options} onChange={handleChange}>
        {_map(data, ({ onClick, img }) => (
          <SwiperItem key={img} itemId={img}>
            <View
              style={{ width: '100%', height: '100%' }}
              onClick={() => {
                onClick && onClick()
              }}
            >
              <Image src={img} width='100%' height='100%' />
            </View>
          </SwiperItem>
        ))}
      </Swiper>
      <SwiperPagination data={_data} current={current} type='rect' />
    </View>
  )
}

SwiperImg.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      img: PropTypes.string.isRequired,
    })
  ),
  /** 小程序 swiper 相关参数设置 */
  options: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default SwiperImg