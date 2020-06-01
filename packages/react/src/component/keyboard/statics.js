import React from 'react'
import LayoutRoot from '../layout_root'
import Keyboard from './keyboard'
import Popup from '../popup'
import EVENT_TYPE from '../../event_type'
import { KEYBOARD_LABEL, isKeyboardNeedHide } from './util'

// 事件通知
const dispatchKeyboardEvent = (eventName) => {
  window.dispatchEvent(new window.CustomEvent(eventName))
}

const handleWindowClick = (e) => {
  if (isKeyboardNeedHide(e.target)) {
    KeyboardStatics.hide()
  }
}

// 此 render 和 hide 和其他 static 很不一样
// 只 setComponent，不做 renderWith。不耦合 history
// and keyboard 的事件只有切换的时候才会抛事件。 即多次 render，也只会抛一次事件
const KeyboardStatics = {
  active: false,
  render({ title, onHide, ...rest }) {
    LayoutRoot.setComponent(
      LayoutRoot.TYPE.KEYBOARD,
      <Popup
        title={title}
        onHide={() => {
          KeyboardStatics.hide()
          onHide && onHide()
        }}
        bottom
        disabledMask
        disabledAnimate
        data-keyboard-label={KEYBOARD_LABEL}
      >
        <Keyboard {...rest} />
      </Popup>
    )

    // false => true 才通知
    if (this.active === false) {
      dispatchKeyboardEvent(EVENT_TYPE.KEYBOARD_SHOW)
      // 键盘弹出需要监听 window click
      document.body.addEventListener('click', handleWindowClick)
    }

    this.active = true
  },

  hide() {
    LayoutRoot.removeComponent(LayoutRoot.TYPE.KEYBOARD)

    // true => false 才通知
    if (this.active) {
      dispatchKeyboardEvent(EVENT_TYPE.KEYBOARD_HIDE)
      // 关闭键盘记得remove
      document.body.removeEventListener('click', handleWindowClick)
    }

    this.active = false
  },
}

export default KeyboardStatics
