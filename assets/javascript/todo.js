//click on to make a line through
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
})
//click on to delete the list
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
    
})

$("input[type='text']").keypress(function(event){
    if (event.which===13){
        //Variable todoText is used to store the value enter in the input field
      var todoText=$(this).val();
      //setting the value to empty
      $(this).val("");
      //we need to append the input into the unorderd list for that we used append method
      $("ul").append("<li><span><i id='xcel' class='far fa-trash-alt'></i></span> "+ todoText + "</li>")
      
       
    }
})

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
})