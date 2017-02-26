import './vendors'
import { Flag } from './components'

const VuePlugin = {
    install: function (Vue) {
        if (VuePlugin.installed) {
            return;
        }
        VuePlugin.installed = true;
        Vue.component('flag', Flag);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
}

export default VuePlugin;