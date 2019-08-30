$(document).ready(function () {
    $(".myBtn").click(function () {
        $("#myModal").modal();
    });
});


function display(){
    var click=document.getElementById("search-result");
    click.style.display='block';
    return false;
}

function validate(){
   var cat= document.getElementById("category").value;
   if(cat=="trainee"){
       window.location.href="trainee-landing.html";
       return false;
   }
   else{
    window.location.href="trainer-landing.html";
    return false;
   }

}