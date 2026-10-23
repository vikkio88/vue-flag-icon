import "flag-icons/css/flag-icons.min.css";

import { Flag } from "./components";

const VuePlugin = {
  install(app) {
    app.component("flag", Flag);
    app.component("Flag", Flag);
  },
};

export default VuePlugin;
export { Flag };
