import VRow from './row/index'
import VCol from './col/index'
import VContainer from './container/index'
import VHeader from './header/index'
import VMain from './main/index'
import VFooter from './footer/index'
import VAside from './aside/index'

const components = [
  VRow,
  VCol,
  VContainer,
  VHeader,
  VMain,
  VFooter,
  VAside
]

/**
 * 添加 install 方法
 * @param {*} Vue
 */
const install = function (Vue) {
  components.map(component => Vue.component(component.name, component))
}

export default {
  install,
  VRow,
  VCol,
  VContainer,
  VHeader,
  VMain,
  VFooter,
  VAside
}
