import React from 'react'
import Label from './index'

export const normal = () => (
  <div>
    <Label text='默认' />
  </div>
)

export const primary = () => (
  <div>
    <Label text='自提' type='primary'/>
  </div>
)

export const plain = () => (
  <div>
    <Label text='限购' type='plain' />
  </div>
)

export const accent = () => (
  <div>
    <Label text='组合商品' type='accent' />
  </div>
)

export default {
  title: '基础/Label',
}
