$(document).ready(function(){
    $("#lookup").on('click',function(){
        search($("#country").val());
    });
});
function search(x)
{
    var a = 'https://info2180-lab7-terieka20.c9users.io/world.php?country'+x;
    $.ajax(a,{method:'GET',}).done(function(e){
        alert($(e).text());
        $("#result").html(e);
    }).fail (function (y){
        $("#result").html('Error');
    });
}
