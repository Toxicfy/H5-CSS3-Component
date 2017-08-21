var Body = document.getElementsByTagName("body")[0];
var Banner = document.getElementsByClassName("banner");
var Span = document.getElementsByTagName("span");
var Next = document.getElementsByClassName("next")[0];
var Prev = document.getElementsByClassName("prev")[0];

//初始化让第一张图片显示，和第一个原点显示
Banner[0].style.opacity = "1";
Span[0].className = "on";
var num = 0;

for (var i = 0; i < Span.length; i++) {
  Span[i].index = i;
  // icon change
  Span[i].onclick = function () {
    for (var j = 0; j < Span.length; j++) {
      num = this.index;
      Span[j].className = "";
      Banner[j].style.opacity = "0";
    }
    Span[num].className = "on";
    Banner[num].style.opacity = "1";
  }
  // next change
  Next.onclick = function () {
    for (var j = 0; j < Span.length; j++) {
      if (Span[j].className == "on") {
        Span[j].className = "";
        Banner[j].style.opacity = "0";
        j++;
        num++;
        if (j > 4) {
          j = 0;
        }
        Span[j].className = "on";
        Banner[j].style.opacity = "1";
      }
    }
  }
  // prev change
  Prev.onclick = function () {
    for (var j = 0; j < Span.length; j++) {
      if (Span[j].className == "on") {
        Span[j].className = "";
        Banner[j].style.opacity = "0";
        j--;
        num--;
        if (j < 0) {
          j = 4;
        }
        Span[j].className = "on";
        Banner[j].style.opacity = "1";
      }
    }
  }
}

function Time() { /*设置定时器运行的函数*/
  num++;
  if (num < 5) {
    for (var j = 0; j < Span.length; j++) {
      Span[j].className = "";
      Banner[j].style.opacity = "0";
    }
    Span[num].className = "on";
    Banner[num].style.opacity = "1";
  } else {
    num = -1;
  }
}
var timer = setInterval("Time()", 1800); /*调用定时器*/
Body.onmouseover = function () { /*鼠标引入，清除定时器，轮播图停止*/
  clearInterval(timer);
};
Body.onmouseout = function () { /*鼠标移出，重新调用定时器，轮播图开始*/
  clearInterval(timer);
  timer = setInterval("Time()", 1800);
};