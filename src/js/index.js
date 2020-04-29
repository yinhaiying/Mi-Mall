import "../css/common.scss"
import {tplReplace,  trimSpaces,getUrlQuery,throttle} from '../utils/tools.js';

import { Header } from "../components/header";

class Index {
  constructor(){
    this.$app = $('<div id = "app"></div>');
    this.init();
  }

  init(){
    this.render();
  }
  render(){
    new Header(this.$app);
    $('body').prepend(this.$app);
  }
}

new Index(jQuery)
