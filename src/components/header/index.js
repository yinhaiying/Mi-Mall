import tpl from './index.tpl';   // tpl文件也可以这样通过import进行引入 导出的是一个函数需要执行得到HTML模板
import './index.scss';
import { Logo } from "./logo/index.js";
import {Nav} from "./nav/index.js";
import {search, Search } from "./search/index.js"
import tools from "../../utils/tools"

class Header {
  constructor(el,fieldDatas,phoneDatas){
    this.name = 'header';
    this.$el = el;
    this.logo = new Logo();
    this.nav = new Nav();
    this.search = new Search();
    this.fieldDatas = fieldDatas;
    this.phoneDatas = phoneDatas;
    this.init();
  }
  async init(){
    await this.render();
    this.bindEvent();
  }
  async render(){
    let html = tools.tplReplace(tpl(),{
      logo:this.logo.tpl(),
      nav:this.nav.tpl(this.fieldDatas),
      search:this.search.tpl()
    });
    await this.$el.append(html);
  }
  bindEvent(){
    const $nav = $('.J_nav');
    const $searchBtn = $('.J_searchBtn');
    $nav.on('mouseenter','.nav-item',{phoneDatas:this.phoneDatas,oNav:this.nav},this.nav.navMouseIn)
    $searchBtn.on('click',this.search.searchPhone)
  }
}
export {
  Header
}
