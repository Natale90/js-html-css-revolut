


function drpDown(){

  $('.list').mouseenter(function(){
    $('.mn_sub.active').removeClass('active');
    $(this).find('.mn_sub').addClass('active');
  });

}


function drpUp(){

  $('.list').click(function(){

    $('.mn_sub',  this).toggleClass('active');

  })
}




function init(){

  drpDown();
  drpUp();
}

$(document).ready(init);
