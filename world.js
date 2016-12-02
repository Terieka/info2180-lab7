$(document).ready(function(){
    $("#lookup").on('click',function(){
        search($("#country").val());
        
    $("#checkall").on('check',function(){
        getall();
    });
    
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
function getall()
{
    var a = 'https://info2180-lab7-terieka20.c9users.io/world.php?all=true';
    $.ajax(a,{methos:'GET',}).done(function(e){
        alert($(e).text());
        $("#result").html(e);
    }).fail(function(y){
        $("#result").html('Error');
    });
}
