import "../css/common.scss"
import {IndexModel} from "../models/index"
import {tplReplace,  trimSpaces,getUrlQuery,throttle} from '../utils/tools.js';

import { Header } from "../components/header";

class Index {
  constructor(){
    this.$app = $('<div id = "app"></div>');
    this.init();
  }

  init(){
    this.getDatas();
    this.render();
  }
  render(){
    new Header(this.$app);
    $('body').prepend(this.$app);
  }
  getDatas(){
    const indexModel = new IndexModel();
    indexModel.getDatas({swiper:true,phone:true,field:true})
    .then((res) => {
      console.log('getDatas')
      console.log(res)
    })
  }
}

new Index(jQuery)
