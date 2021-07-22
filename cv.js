
// zoom photo quand hover sur header
$(document).ready(function(){
    $("header").hover(function(){
      $("img").css("transform", "scale(150%)")}, 
      function(){
      $("img").css("transform", "scale(100%)");
      });
  });
// affichage de la date
  
  document.getElementById('footer').innerHTML = Date();