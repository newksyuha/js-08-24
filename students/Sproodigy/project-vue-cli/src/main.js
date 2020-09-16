import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const requireComponent = require.context(
  // Относительный путь до каталога компонентов
  './components',
  // Обрабатывать или нет подкаталоги
  false,
  // Регулярное выражение для определения файлов компонентов
  /[A-Z]\w+\.(vue)$/
)

requireComponent.keys().forEach(fileName => {
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
  const componentConfig = requireComponent(fileName)

  Vue.component(
    componentName,
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    componentConfig.default || componentConfig
  )
})

new Vue({
  render: h => h(App),
}).$mount('#app')
