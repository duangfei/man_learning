var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for (i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for (i = 0; i < tabs.length; i++) {
      // if (tabs[i].getAttribute('class')) {
      //   tabs[i].removeAttribute('class');
      // }
      tabs[i].className = '';
    }
    tab.className = 'active';

    for (i = 0; i < panels.length; i++) {
      // if(panels[i].getAttribute('class')){
      //   panels[i].removeAttribute('class');
      // }
      panels[i].className = '';
    }
    panels[tabPos].className = 'article-panels';
  }
}
