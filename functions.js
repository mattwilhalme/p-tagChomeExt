$(document).ready(function(){
  
  chrome.browserAction.setBadgeText ( { text: "Tags" } );
  $("#copy").click(function(){
    var text = $('textarea').val();
    text = text.replace(/\n/g,"\r\n<p>");
    var final = "<p>" + text.slice(0);
    console.log("Initial")
    console.log(final)
      do {
        final = final.replace(/<p><p>/g, "<p>");
        final = final.replace(/<p>\s+\n+<p>/g, "<p>");
        final = final.replace(/<p>\n<p>/g, "<p>");

         }
     

 while (final.search(/<p><p>/) == true || final.search(/<p>\r\n<p>/) == true);
  
  console.log("Final");
  console.log(final);
  $('textarea').val(final);
  });
  

<!-- clear text -->
  $('#reset').click(function(){
  $('textarea').val('');
});



    
});
