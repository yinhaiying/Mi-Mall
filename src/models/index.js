import config from "../utils/config"
import $ from  "../js/jquery.min.js"
class IndexModel {
  getDatas({swiper,phone,field}){
    const url = `getDatas?swiper=${swiper}&phone=${phone}&field=${field}`;
    return new Promise((resolve,reject) => {
      $.ajax({
        url:config.API.base_url + url,
        type:'GET',
        dataType:'JSONP',
        jsonp:'cb',
        success(data){
          resolve(data);
        }
      })
    })
  }
}

export {
  IndexModel
}
