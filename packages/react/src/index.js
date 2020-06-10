// 表单
import { Input, InputPassword, BorderInput } from './component/input'
import Uploader from './component/uploader'
import Textarea from './component/textarea'
import { Cells, Cell, CellForm, CellsForm } from './component/cell'
import {
  Picker,
  CouplingPicker,
  ConfirmPicker,
  ConfirmCouplingPicker,
  SelectPicker,
} from './component/picker'
import { Keyboard, KeyboardWrap } from './component/keyboard'
import ScrollIntoView from './component/scroll_into_view'

// 基础
import FlipNumber from './component/flip_number'
import Image from './component/image'
import Price from './component/price'
import Counter from './component/counter'

// 布局
import Divider from './component/divider'
import Header from './component/header'
import Tabbar from './component/tab_bar'
import Square from './component/square'
import Panel from '../../components/src/component/panel'
import { Lazy, LazyList } from './component/lazy'
import PullUpDown from './component/pull_up_down'
import List from './component/list'
import Scroll from './component/scroll'
import Nav from './component/nav'

// 浮层
import NProgress from './component/nprogress'
import InnerLayer from './component/inner_layer'
import Popup from './component/popup'
import Tooltip from './component/tooltip'
import ActionSheet from './component/action_sheet'

// 其他
import { LetterIndex, LetterIndexMultiple } from './component/letter_index'
import { LocalStorage, SessionStorage } from './component/storage'
import CSSVariable from './css_variable'
import { Search, SearchPage, FakeSearch } from './component/search'
import RepeatTimes from './component/repeat_times'
import Canvas from './component/canvas'

import {
  Button,
  ButtonTime,
  Flex,
  Mask,
  Page,
  Toast,
  Loading,
  LayoutRoot,
  Label,
  Badge,
  Tabs,
  Switch,
  TagWrap,
  Calendar,
  RangeCalendar,
  MultipleCalendar,
  Dialog,
  Checkbox,
  Radio,
} from '@gm-mobile/components'

const Alert = Dialog.alert
const Confirm = Dialog.confirm
const Prompt = Dialog.prompt
const Delete = Dialog.delete

export {
  // 表单
  Button,
  ButtonTime,
  Checkbox,
  Radio,
  Input,
  InputPassword,
  BorderInput,
  Switch,
  Uploader,
  Textarea,
  Cells,
  Cell,
  CellForm,
  CellsForm,
  Picker,
  CouplingPicker,
  ConfirmPicker,
  ConfirmCouplingPicker,
  SelectPicker,
  Keyboard,
  KeyboardWrap,
  RangeCalendar,
  MultipleCalendar,
  Calendar,
  ScrollIntoView,
  // 基础
  FlipNumber,
  Image,
  Label,
  Loading,
  Price,
  Counter,
  Badge,
  TagWrap,
  // 布局
  Flex,
  Divider,
  Page,
  Header,
  Tabbar,
  Square,
  Panel,
  Lazy,
  LazyList,
  PullUpDown,
  List,
  Scroll,
  Nav,
  Tabs,
  // 浮层
  LayoutRoot,
  InnerLayer,
  NProgress,
  Toast,
  Mask,
  Popup,
  Dialog,
  Alert,
  Confirm,
  Prompt,
  Delete,
  Tooltip,
  ActionSheet,
  // 其他
  LetterIndex,
  LetterIndexMultiple,
  Search,
  FakeSearch,
  SearchPage,
  RepeatTimes,
  CSSVariable,
  LocalStorage,
  SessionStorage,
  Canvas,
}
