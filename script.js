$(document).ready(function(){
  $(".render").on("click",function(){
    $("span").each(function(){
      var inputSelector = "input." + $(this).attr("class")
      console.log(inputSelector)
      var input = $(inputSelector)
      console.log(input)
      $(this).text(input.val())
    })
  })
})
