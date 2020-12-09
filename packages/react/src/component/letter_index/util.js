import _ from 'lodash'
import { pinyin } from '@gm-mobile/c-tool'

const letterList = _.map(_.range(65, 91), (v) => String.fromCharCode(v))
letterList.push('#') // 无法识别字母的使用 # 代替

function data2Group(data) {
  const flMap = {}

  _.each(data, (v) => {
    const fl = pinyin(v.text)[0].toUpperCase()

    if (!letterList.includes(fl)) {
      if (!flMap['#']) {
        flMap['#'] = [v]
      } else {
        flMap['#'].push(v)
      }

      return
    }

    if (!flMap[fl]) {
      flMap[fl] = [v]
    } else {
      flMap[fl].push(v)
    }
  })

  const result = []

  _.each(letterList, (v) => {
    if (flMap[v]) {
      result.push({
        label: v,
        children: flMap[v],
      })
    }
  })

  return result
}

export { letterList, data2Group }
