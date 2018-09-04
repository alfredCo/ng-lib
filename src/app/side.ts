import { Component } from '@angular/core';
import GLOBALDATA from './config/globalSetting';
@Component({
  selector: 'side',
  templateUrl: './app.side.html'
})
export class SideComponent {
  username = 'admin';
  sideMenu = {
    sideMenuList:GLOBALDATA.ADMIN_MENU,
    activeSubMenu: "", //当前左侧菜单打开的二级菜单的位置
    sideMentTitle: "", //当前左侧菜单标题
    subMenuTitle: "", //当前页面在右侧显示的标题
    menuKeyword: ""
  }
  toggle(item){
    this.sideMenu.activeSubMenu==item.keywords?this.sideMenu.activeSubMenu="":this.sideMenu.activeSubMenu=item.keywords;
  }
  changPassword(){
    console.log(123);
  }
  checkActive = function(item) {
      // let fullpath = $location.path();
      // let fullpathArr = fullpath.split("/");
      // if (item.active) {
      //     return _.include(item.active.split(","), fullpathArr[1]) || _.include(item.active.split(","), fullpathArr[2]);
      // }
  };
}
