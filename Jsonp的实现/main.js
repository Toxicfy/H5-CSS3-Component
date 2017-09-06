function fn1(data) {
  var oUl = document.getElementById('reach_suggest');
  var html = '';
  if (data.s.length) {
    oUl.style.display = 'block';
    for (var i = 0; i < data.s.length; i++) {
      html += '<li><a target="_blank" href="http://www.baidu.com/s?wd=' + data.s[i] + '">' + data.s[i] +
        '</a></li>';
    }
    oUl.innerHTML = html;
  } else {
    oUl.style.display = 'none';
  }
}

window.onload = function () {
  var oQ = document.getElementById('search_text');
  var oUl = document.getElementById('reach_suggest');

  oQ.onkeyup = function () {

    if (this.value != '') {
      var oScript = document.createElement('script');
      oScript.src = 'http://suggestion.baidu.com/su?wd=' + this.value + '&cb=fn1';
      document.body.appendChild(oScript);
    } else {
      oUl.style.display = 'none';
    }

    return false;

  }

  document.onclick = function () {
    oUl.style.display = 'none';
  }

}