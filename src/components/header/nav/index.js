import navTpl from "./tpl/nav.tpl";
import navItemTpl from "./tpl/nav-item.tpl";
import tools from "../../../utils/tools";
import "./index.scss";


class Nav{
  constructor(){
    this.name = "headerNav";
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
      navItems:list
    })
  }
}

export {
  Nav
}
