import tpl from './index.tpl';   // tpl文件也可以这样通过import进行引入
import './index.scss';
import { Logo } from "./logo/index.js";

import tools from "../../utils/tools"

class Header {
  constructor(el){
    this.name = 'header';
    this.$el = el;
    this.logo = new Logo();
    this.init();
  }

  init(){
    this.render();
  }
  render(){
    let html =tools.tplReplace(tpl(),{
      logo:this.logo.tpl()
    });
    this.$el.append(html);
  }
}
export {
  Header
}
