$(function(){
  $("header").load("/common/header.html", function( response, status, xhr ) {
    if (status === "error") {
      $("header").load("../common/header.html");
    }
  }); 
  $("footer").load("/common/footer.html", function( response, status, xhr ) {
    if (status === "error") {
      $("footer").load("../common/footer.html");
    }
  }); 
  $("#events").load("/common/events.html"); 
});