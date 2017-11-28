
$(function(){
  var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson','Windows Phone');
  for (var word in mobileKeyWords){
    alert(sessionStorage.getItem('show_pcIndex'));
    if(sessionStorage.getItem('show_pcIndex')){
      break;
    }
    else if (navigator.userAgent.match(mobileKeyWords[word]) != null){
      location.href = "index_m.html";
      break;
    }
  }
});

function closeWin(){
   sessionStorage.removeItem('show_pcIndex');
}
