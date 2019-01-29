import Vue from 'vue'
import {
  Button,
  Notification,
  Card,
  Row,
  Col
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$notify = Notification
