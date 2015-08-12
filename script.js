$(document).ready(function(){
  $(".render").on("click",function(){
    $("span").each(function(){
      var inputSelector = "input." + $(this).attr("class")
      var input = $(inputSelector)
      $(this).text(input.val())
    })
  })
})
