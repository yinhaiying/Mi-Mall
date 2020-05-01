import tpl from './index.tpl';   // tpl文件也可以这样通过import进行引入 导出的是一个函数需要执行得到HTML模板
import './index.scss';
import { Logo } from "./logo/index.js";
import {Nav} from "./nav/index.js";
import tools from "../../utils/tools"

class Header {
  constructor(el,fieldDatas){
    this.name = 'header';
    this.$el = el;
    this.logo = new Logo();
    this.nav = new Nav();
    this.fieldDatas = fieldDatas;
    this.init();
  }
  init(){
    this.render();
  }
  render(){
    let html = tools.tplReplace(tpl(),{
      logo:this.logo.tpl(),
      nav:this.nav.tpl(this.fieldDatas)
    });
    this.$el.append(html);
  }
}
export {
  Header
}
