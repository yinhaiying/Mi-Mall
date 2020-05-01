
import {tplReplace,  trimSpaces,getUrlQuery,throttle} from '../utils/tools.js';
import {App} from './App'
import { Header } from "../components/header";

// Index页面继承公共的类的功能
class Index extends App{
  constructor($){
    super($,{
      swiper:true,
      phone:true,
      field:true
    })
  }
  render(){
    new Header(this.$app,this.cache.fieldDatas);
    $('body').prepend(this.$app);
  }
}

new Index(jQuery)
