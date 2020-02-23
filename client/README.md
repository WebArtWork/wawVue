# Waw Vue template client

## Install, Serve and Build 
### Install
	- npm install
	or
	- yarn istall
### Serve
	- npm run serve
	or
	- yarn serve
### Build
	- npm run build
	or
	- yarn build


## Folder structure

### Public
Являється місцем зберігання основного html і іконок сайту, також можна добавляти зображення
### Src 
Місце зберігання компонентів і основного функціоналу
##### assetsАссети для фронту
##### components
Зберігаються компоненти
	Для створення компонента створюєтсья файл з назвою компонента.js і імпортується в main.ts 
##### router
Папка з налаштуванням маршрутизації,
	Для додавання маршрутизації, у файлі index.js цієї папки, додається об'єкт у масив об'єктів по принципу
	 - path: '/', //url сторінки
	 - name: 'Home', //назва роута(використовується для прямої адресації)
	 - component: Admin // імпортований компонент який буде відображатись при переході на данний роут
##### store
Зберігаються файли сховища. Сховище у vue схожі з service в Angular
Для додавання сховища(service) необхідно
- Створити файл з назвою сховища
- Імпортувати його в основний index.js сховища і добавити в блок modules як свойство об'єкта
```javascript
// Структура файла модуля для сховища 
 const state = { // Створюються змінні  (типу глобальні змінні)
	test: ''
 }
 
 const getters = {//функції які використвуються для обробки даних із state
	 getTest(state) {
		 return state.test + ' ! '
	 }
 }
 
 const mutations = {// функції які використовуються для встановлення значень state, тому що зміна state напряму являється поганим тоном
	 setTest(state, payload) {
		 state.test = payload
	 }
 }
 
 const actions = {
	 loadTest (context, params) {//(Глобальні функції) являються асинхроними функціями, зачасту використовуються для звязку з сервером і отриманням данних, повертають Promise
		 // context дозволяє використовувати функції dispatch, commit, і значення state
		 // dispatch('name actions', params) - використовується для виклику екшена(функції) 'name actions' з параметрами params
		 // commit('name mutations', payload) - виклик мутації 'name mutations' з параметром payload
	 }
 }
 
 export default {
 state, getters, mutations, actions
 }
```
##### style
папка зі стилями, має основний main.scss який уже інсертиться в проект. Нові файли добаляться за домпомогою @import в main.scss

##### views
Являються компонентами сторінок або ж самими сторінками
Для створення створюється файл зі структурою: 
```javascript
<template lang="" src="">// html код для компонента, атрибути lang - вказує яким шаблонізатором оброблювати html, src - указуєьбся шлях до окремого файлу з html
<div>
</div>
</template>

<script lang='' src=''> // js код, атрибути так як і в template
import {Component, Vue} from 'vue-property-decorator';
@Component //декоратор який вказує що клас є компонентом без нього виникають помилки імпорту також прописуються хуки життєвого циклу
export default class ComponentName extends Vue {
}
</script>
<style lang="" src="" scoped>//css код, атрибути як і в template, крім scoped вказує на використання стилів локальних для данного компонента
</style>
```
##### App.vue
Основний компонент, являється точкою входу для інших компонентів

##### main.ts
Основний файл з налаштуваннями Vue і підключенням глобальних компонентів
