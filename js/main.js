$(function(){
  $("#menu").click( function(){
    $(".nav-menu-mobile").fadeIn('slow', function() {});
  });
  $(".exit").click(function() {
    $(".nav-menu-mobile").fadeOut('slow', function() {});
  });
  $(".exit").hover(function() {
    $(".exit").animate({borderColor: 'white',color: 'white'},200,function(){});
  }, function() {
    $(".exit").animate({borderColor: 'black',color: 'black'},200,function(){});
  });
  // $(".see-more").click(function() {
  //   $('html, body').animate({
  //     scrollTop: $("#see-more").offset().top
  //   }, 800);
  // });
  $(".see-more").hover(function() {
    $(".fa-arrow-down").animate({top:"10px"},200,function(){});
  }, function() {
    $(".fa-arrow-down").animate({top:"0px"},200,function(){});
  });
  $(".see-more").hover(function() {
    $(".fa-bullseye").animate({width:"10px"},200,function(){});
  }, function() {
    $(".fa-bullseye").animate({width:"0px"},200,function(){});
  });

  $(".next-click").click(()=>{
    var a = $(".next-click").text().toString().split(" ").join("-");
    window.location.href = "/" + a;
  });

});

function clickedButton(id){
  var el = $("."+id);
  console.log(el.index());
  if(el.parent().parent().next()){
    $('html, body').animate({
      scrollTop: $(el.parent().parent().next()).offset().top
    }, 800);
  }
}

function getFooter(){
  $('html, body').animate({
    scrollTop: $("#foot").top
  }, 800);
}



