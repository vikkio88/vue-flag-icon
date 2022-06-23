# Vue-Flag-Icon
[![NPM](https://nodei.co/npm/vue-flag-icon.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-flag-icon/)

a Vue2 Compoment for [flag-icons](https://github.com/lipis/flag-icons)

## Install
```
npm i --save vue-flag-icon
```

## Usage
Just declare the global Compoment with the **use** directive in your app
```javascript
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);
```

Then to use it 
```html
<template>
<div>
...

<flag iso="it" />
<flag iso="gb" />
<flag iso="us" />

...
</div>
</template
```
To see a full set of all the icons and countries *iso* codes visit the [flag-icons](https://flagicons.lipis.dev) website.
There are 246 different icons there.

Being svg files they are resizable as long as you set the font size accordingly in a wrapper element
```html
<div style="font-size:180px">
    <flag iso="it" />
</div>
```

The property **iso** can be as well dynamically set from an object
```javascript
let guy = {
    name: "Vincenzo",
    nationality: "it"
}
```

in the Compoment you should dynamically bind the value
```html
<flag :iso="guy.nationality" />
```

## Screenshot
### Code Example
(it is the basic vue-cli webpack template)
```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <flag iso="it" />
    <flag iso="gb" />
    <flag iso="us" />
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### Additional Props
From 1.0.4 you can now specify two different properties:
- **squared** : it will render the flag as a square if *true*, otherwise the flag will be rectangular shaped (*true* by default).
- **title** : you can specify the title of the flag icon, (by default it will be overwritten by the *iso*)

### Result
![image](https://cloud.githubusercontent.com/assets/248805/23336343/22f3bcf6-fbc5-11e6-93bf-6adae0a27f68.png)



