import { getCurrentPages } from '@tarojs/taro'
import _last from 'lodash/last'

export default function getPath() {
  const route = _last(getCurrentPages()).route
  return `/${route}`
}