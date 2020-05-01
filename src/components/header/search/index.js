import searchTpl from "./index.tpl";
import "./index.scss";
import tools from "../../../utils/tools"

class Search {
  constructor(){
    this.name = "search"
    this.tpl = searchTpl
  }

  searchPhone(){
    const $searchForm = $('#J_searchForm');
    const $searchInput = $('#J_keyword');
    const keyword = tools.trimSpaces($searchInput.val());
    const action = $searchForm.prop('action');
    if(keyword.length > 0){
      window.open(action + "?keyword="+keyword)
    }
  }
}

export {
  Search
}
