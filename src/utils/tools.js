

// 模板替换
function tplReplace(tpl,replaceObject){
  tpl.replace(/{{(.*?)}}/g,(node,key) =>{
    return replaceObject[key]
  })
}

// 去除空格
function trimSpaces(str){
  return str.replace(/\s+/g,'');
}

// 获取url query参数

function getUrlQuery(key){
  const re = new RegExp('(^|&)' + key + '=([^&]*)(&|$)','i');
  // &id=1  ?id=12(去除问好就是id=12)
  // ^|&表示以空或者&开头
  // &id=2&user=hello 表示以&或者空开头然后任意个非&得数，最后以&或者空结尾。
  const res = window.location.search.substr(1).match(re);
  return res != null ? decodeURIComponent(res[2]) : null;
}

// 函数节流
function throttle(fn,delay){
  let timer = null;
  let begin = new Date().getTime();
  return function(){
    const _self = this;
    const args = arguments;
    const current = new Date().getTime();
    clearTimeout(timer);
    if(current - begin >= delay){
      fn.apply(_self,args);
      begin  = current;
    }else{
      timer = setTimeout(() => {
        fn.apply(_self,args)
      },delay)
    }
  }
}

module.exports = {
  tplReplace,
  trimSpaces,
  getUrlQuery,
  throttle
}
