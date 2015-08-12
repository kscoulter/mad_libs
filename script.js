$(document).ready(function(){
  $(".render").on("click", function(){
    console.log("clicked render");
    var madLibs = []
    $("input").each(function(index){
      value = $(this).val()
      madLibs.push(value)
    })//closes each loop
    $("span").each(function(index){
      text = madLibs[index]
      $(this).text(text)
    })//closes each loop
  })

})//document.ready closing
