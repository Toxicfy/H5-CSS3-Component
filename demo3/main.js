const dtDoms = document.querySelectorAll('dt');

Array.from(dtDoms).forEach((dtDom) => {
  dtDom.onclick = (e) => {
    const dd = e.target.nextElementSibling; // 被点击的dt的下一个dd元素
    toggle(dd);
  }
})

function toggle(target) {
  const ddDoms = document.querySelectorAll('dd');
  if (target.style.height == '' || target.style.height == '0px') {
    for (dd of ddDoms) {
      dd.style.height = '0px';
    }
    Object.assign(target.style, {
      position: "absolute",
      left: "-2000px",
      top: "-2000px",
      height: "auto",
      width: "480px"
    })
    const height = target.offsetHeight;
    target.style.cssText = 'height: 0px';
    requestAnimationFrame(() => {
      target.style.cssText = 'height: ' + height + 'px';
    })
  } else {
    target.style.height = '0px';
  }
}