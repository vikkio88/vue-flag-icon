# Vue-Flag-Icon
a Vue2 Compoment for [flag-icon-css](https://github.com/lipis/flag-icon-css)

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

Being svg files they are resizable as long as you set the font size accordingly in a wrapper element
```html
<div style="font-size:180px">
    <flag iso="it" />
</div>
```

The property **iso** can be as well dinamically set from an object
```javascript
let guy = {
    name: "Vincenzo",
    nationality: "it"
}
```

in the Compoment you should dinamically bind the value
```html
<flag :iso="guy.nationality" />
```

### Screenshot


