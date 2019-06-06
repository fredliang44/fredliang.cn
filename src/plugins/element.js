import Vue from 'vue'
import {
  Button,
  Notification,
  Card,
  Row,
  Col,
  Popover
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)

Vue.prototype.$notify = Notification
