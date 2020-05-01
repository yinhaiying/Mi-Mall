## 组件化的实现

步骤一：子组件Logo组件中，将tpl模板正常导出。
```javascript
import tpl from './index.tpl';
import './index.scss';
class Logo {
  constructor(){
    this.name = "logo";
    this.tpl = tpl;
  }
}
export {
  Logo
}
```
步骤二：在Header组件中替换LOGO组件
Logo组件在Header使用如下：
```javascript
<Header class = "header">
  <div class = "container">
    {{logo}}
  </div>
</Header>
```
也就是说我们需要使用方法替换Header组件中的{{logo}}这个部分。
```javascript
    let html =tools.tplReplace(tpl(),{
      logo:this.logo.tpl()
    });
    console.log(html)
```
替换后的Header组件结构就是：
```html
<Header class = "header">
  <div class = "container">
    <div class = "logo">
      <a href="./" class = "logo-lk"></a>
    </div>
  </div>
</Header>
```

步骤三：把Header组件添加到根节点上。
在入口文件Index.js中创建一个根节点。将Header追加到
```javascript
class Index {
  constructor(){
    this.$app = $('<div id = "app"></div>');
    this.init();
  }
  init(){
    this.render();
  }
  render(){
    new Header(this.$app);
    $('body').prepend(this.$app);
  }
}
```
ps：类中通常由init、render方法。

## Header中实现事件代理
对于导航栏的mouseenter事件，通过在Header组件中使用事件代理的方法来触发。
```javascript
bindEvent(){
  const $nav = $('.J_nav');
  $nav.on('mouseenter','.nav-item',{phoneDatas:this.phoneDatas,oNav:this.nav},this.nav.navMouseIn)
}
```
注意：事件代理必须等到模板替换完成以后才能执行。
```javascript
async init(){
  await this.render();
  this.bindEvent();
}
```

多层的嵌套，通过线组装好，然后传递回去。
```javascript
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
```
