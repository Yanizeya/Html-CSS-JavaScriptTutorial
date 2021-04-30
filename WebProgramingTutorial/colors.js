function nightDayHandle(self){
    var target = document.querySelector('body');
    var alist = document.querySelectorAll('a');

    if(self.value === 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      for(var i=0; i<alist.length; i++){
      alist[i].style.color = 'powderblue';
      }
    }
    else{
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      for(var i=0; i<alist.length; i++){
      alist[i].style.color = 'blue';
      }
    }
  }