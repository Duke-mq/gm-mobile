import React from 'react'
import Loading from './index'

export const normal = () => (
  <div>
    <Loading>loading...</Loading>
    <Loading line>loading...</Loading>
  </div>
)

export default {
  title: 'Loading',
}
