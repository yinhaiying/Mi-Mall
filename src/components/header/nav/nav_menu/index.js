import navMenuTpl from "./tpl/nav-menu.tpl";
import "./index.scss";
import tools from "../../../../utils/tools"
class NavMenu {
  constructor(){
    this.name = "navMenu"
    this.tpl = navMenuTpl()
  }
}

export {
  NavMenu
}
