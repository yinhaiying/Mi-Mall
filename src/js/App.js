// 所有页面公共的东西
import "../css/common.scss"

import {IndexModel} from "../models/index"
class App {
  constructor($,options){
    this.$app = $('<div id = "app"></div>');
    this.swiper = options.swiper;
    this.phone = options.phone;
    this.field = options.field;
    this.cache = null;
    this.init();
  }
  async init(){
    await  this.getDatas();
    this.render();
  }
  async getDatas(){
    const indexModel = new IndexModel();
    await indexModel.getDatas({
      swiper:this.swiper,
      phone:this.phone,
      field:this.field
    }).then((res) => {
      this.cache = {
        phoneDatas:res.phone_data,
        fieldDatas:res.field_data,
        swiperDatas:res.swiper_data
      }
      console.log('cache')
      console.log(this.cache)
    })
  }
}

export {
  App
}
