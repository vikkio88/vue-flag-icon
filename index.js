import "./vendors";

import { isVue2, isVue3 } from "vue-demi";

import { Flag } from "./components";

const VuePlugin = {
  install: function (Vue) {
    if (VuePlugin.installed) {
      return;
    }
    VuePlugin.installed = true;
    Vue.component("flag", Flag);
  },
};

if (isVue3) {
  VuePlugin.install = function (app) {
    if (VuePlugin.installed) {
      return;
    }
    VuePlugin.installed = true;
    app.component("flag", Flag);
  };
}

if (isVue2 && typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VuePlugin);
}

export default VuePlugin;
