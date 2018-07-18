let controller = new ScrollMagic.Controller();

$(function(){
  $("#menu").click( function(){
    $("body").css("overflow", "hidden");
    $(".nav-menu-mobile").fadeIn('slow', function() {});
  });
  $(".exit").click(function() {
    $("body").css("overflow", "auto");
    $(".nav-menu-mobile").fadeOut('slow', function() {});
  });
  $(".exit").hover(function() {
    $(".exit").animate({borderColor: 'blue',color: 'blue'},200,function(){});
  }, function() {
    $(".exit").animate({borderColor: 'black',color: 'black'},200,function(){});
  });
  $(".logo").hover(function() {
    console.log("hover");
    $(".logo").prop({src: "blue_logo.png"});
  }, function() {
    $(".logo").prop({src: "logo.png"});
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

  $("#click1").click(()=>{
    var a = $("#content1").text().toString().split(" ").join("-").toLowerCase();
    window.location.href = "/" + a;
  });
  $("#click2").click(()=>{
    var a = $("#click2").text().toString().split(" ").join("-");
    window.location.href = "/" + a;
  });

  $(document).ready((e)=>{
    TweenMax.to("html", 1, {opacity:1, ease: Circ.easeIn});
    TweenMax.to("html", 1, {opacity:1, ease: Circ.easeIn});
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




