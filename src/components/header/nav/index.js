import navTpl from "./tpl/nav.tpl";
import navItemTpl from "./tpl/nav-item.tpl";
import tools from "../../../utils/tools";
import "./index.scss";

import {NavMenu} from "./nav_menu"

class Nav{
  constructor(){
    this.name = "headerNav";
    this.navMenu = new NavMenu();
    this.htmlCache = {};
  }
  tpl(data){
    let list = "";
    data.forEach((item) => {
      list += tools.tplReplace(navItemTpl(),{
        field:item.field,
        seriesName:item.series_name
      })
    });
    return tools.tplReplace(navTpl(),{
      navItems:list,
      navMenu:this.navMenu.tpl
    })
  }
  navMouseIn(e){
    const { data } = e;
    const { phoneDatas,oNav } = data;
    const field = $(this).attr('data-field');
    const $navMenu = $('.J_navMenu');
    let navMenuItemHTML = oNav.navMenu.appendMenuCards(phoneDatas.filter((item) => item.field=== field));
    // 缓存处理
    if(!oNav.htmlCache[field]){
      oNav.htmlCache[field] = navMenuItemHTML;
    }
    $navMenu.html(oNav.htmlCache[field]);
  }
}

export {
  Nav
}
