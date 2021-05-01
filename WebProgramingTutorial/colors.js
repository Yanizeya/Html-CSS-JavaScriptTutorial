

var Links = {
  
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // for(i=0; i<alist.length; i++){
    //   alist[i].style.color = color;
    // }
    $('a').css('color', color); //jquery 라이브러리를 사용한 코드
  }
}
var Body = {
  setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundcolor = color;
  }
}
function nightDayHandle(self){
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue');
      self.value = 'day';      
      }

    else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('blue');
      self.value = 'night';
    }
  }