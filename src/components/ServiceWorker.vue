<template>
    <div>
        <!-- <el-button  @click="alertMessage" type="primary">主要按钮</el-button> -->
    </div>
</template>

<script>
import { register } from 'register-service-worker'

export default {
  name: 'ServiceWorker',
  methods: {
    alertMessage (title, message, result) {
      this.$notify({
        title: title,
        message: message,
        type: result,
        duration: 4000,
        showClose: false
      })
    },
    notifyRefresh () {
      this.$notify({
        title: this.$t('serviceworker.refresh.title'),
        dangerouslyUseHTMLString: true,
        message: this.$t('serviceworker.refresh.message[0]') + this.$route.path + this.$t('serviceworker.refresh.message[1]'),
        position: 'bottom-right',
        duration: 5000
      })
    }
  },
  mounted: function () {
    const bindthis = this
    if (process.env.NODE_ENV === 'production') {
      register(`${process.env.BASE_URL}service-worker.js`, {
        ready () {
          console.log(
            'App is being served from cache by a service worker.\n' +
            'For more details, visit https://goo.gl/AFskqB'
          )
        },

        registered (registration) {
          if (Notification.permission === 'default') {
            Notification.requestPermission().then(function (result) {
              switch (Notification.permission) {
                case 'denied':
                  bindthis.alertMessage(bindthis.$t('serviceworker.notify.denied.title'), bindthis.$t('serviceworker.notify.denied.message'), 'error')
                  console.log('Permission wasn\'t granted. Allow a retry.')
                  break
                case 'granted':
                  bindthis.alertMessage(bindthis.$t('serviceworker.notify.granted.title'), bindthis.$t('serviceworker.notify.granted.message'), 'success')
                  subscribe(registration)
                  break
                default:
                  console.log('The permission request was dismissed.')
                  console.log(Notification.permission)
              }
              console.log(result)
            })
          }
          subscribe(registration)
          console.log('Service worker has been registered.')
        },
        cached () {
          console.log('Content has been cached for offline use.')
        },
        updated (registration) {
          bindthis.notifyRefresh()
          console.log('New content is available; please refresh.')
        },
        offline () {
          console.log('No internet connection found. App is running in offline mode.')
        },
        error (error) {
          console.error('Error during service worker registration:', error)
        }
      })
    }
  }
}

function subscribe (serviceWorkerReg) {
  serviceWorkerReg.pushManager.subscribe({ // 2. 订阅
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BH4TZegaPQu8VK-tVZ3K-aFWVACY00zJd0tdCs5x9Ps_8VSYp9LuTdxwEVBECc1yfl5R_C8r1aMwObLj0AHiSRw')
  })
    .then(function (subscription) {
      // 3. 发送推送订阅对象到服务器，具体实现中发送请求到后端api
      console.log('then sendSubscriptionToBackEnd (subscription)')
      sendSubscriptionToBackEnd(subscription)
      return true
    })
    .catch(function (error) {
      if (Notification.permission === 'denied') {
        console.log('用户拒绝了订阅请求')
        return false
      }
      console.log('sth goes wrong', error)
    })
}

function urlBase64ToUint8Array (base64String) {
  console.log('urlBase64ToUint8Array (base64String)')
  var padding = '='.repeat((4 - base64String.length % 4) % 4)
  var base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  var rawData = window.atob(base64)
  var outputArray = new Uint8Array(rawData.length)
  for (var i = 0, max = rawData.length; i < max; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function sendSubscriptionToBackEnd (subscription) {
  console.log('sendSubscriptionToBackEnd (subscription)')
  return fetch('https://open.fredliang.cn/blog/push/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Bad status code from server.')
      }
      return response.json()
    })
    .then(function (responseData) {
      if (!(responseData.data && responseData.data.success)) {
        throw new Error('Bad response from server.')
      }
    })
}
</script>

<style>

</style>
