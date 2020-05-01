import navMenuTpl from "./tpl/nav-menu.tpl";
import navMenuItemTpl from "./tpl/nav-menu-item.tpl";
import "./index.scss";
import tools from "../../../../utils/tools"
class NavMenu {
  constructor(){
    this.name = "navMenu"
    this.tpl = navMenuTpl()
  }
  appendMenuCards(data){
    let list = "";
    console.log(data)
    data.forEach((item,index) => {
      if(index < 6){
        list += tools.tplReplace(navMenuItemTpl(),{
          id:item.id,
          pic:$.parseJSON(item.pics)[0][0][0],
          phone_name:item.phone_name,
          default_price:item.default_price,
          isFirst:index === 0 ? 'first' :''
        })
      }
    });
    return list;
  }
}

export {
  NavMenu
}
