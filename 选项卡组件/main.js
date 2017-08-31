function init() {
  //利用es6中array的from属性将节点列表转换为数组
  let panels = Array.from(document.querySelectorAll('.panel'));
  let menus = Array.from(document.querySelectorAll('.menu'));
  // 添加属性，完成内容显示和tab样式初始化
  showTab(panels, menus, 0);
  // 遍历每个对应的内容，然后绑定点击事件
  menus.forEach((menu, index) => {
    menu.onclick = function () {
      clearCSS(panels, menus); // 重置样式
      showTab(panels, menus, index);
    }
  });
}

function clearCSS(panels, menus) {
  menus.forEach((p) => p.classList.remove('checked'));
  panels.forEach((p) => p.classList.remove('show'));
}

function showTab(panels, menus, index) {
  panels[index].classList.add('show');
  menus[index].classList.add('checked')
}


init();