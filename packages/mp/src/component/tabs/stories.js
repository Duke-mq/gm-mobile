import React from 'react'
import { observable } from 'mobx'
import { View } from '@tarojs/components'

import Tabs from './'

const store = {
  active: 1,
  setActiveTab(index) {
    this.active = index
  },
}

const tabsList = [
  { value: 1, text: '模块一' },
  { value: 2, text: '模块二' },
  { value: 3, text: '模块三' },
]
const defaultStore = observable(store)

export const normal = () => {
  return (
    <View className='m-padding-10' style={{ height: '300px' }}>
      default
      <Tabs
        active={defaultStore.active}
        tabs={tabsList}
        onChange={(index) => defaultStore.setActiveTab(index)}
      />
      label
      <View className='m-bg-back m-padding-tb-10'>
        <Tabs
          active={defaultStore.active}
          tabs={tabsList}
          onChange={(index) => defaultStore.setActiveTab(index)}
          type='label'
        />
      </View>
      capsule
      <Tabs
        active={defaultStore.active}
        tabs={tabsList}
        onChange={(index) => defaultStore.setActiveTab(index)}
        type='capsule'
      />
    </View>
  )
}

export default {
  title: '布局/Tabs',
}
