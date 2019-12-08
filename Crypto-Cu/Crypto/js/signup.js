$("#but").click(f1)
$('#form').submit(function (evt) {
    evt.preventDefault();
    
});
function f1() {
    $("form").submit(function(e){
        e.preventDefault();
    });
    x=$("#exampleInputEmail1").val();
    x1=$("#exampleInputPassword1").val();

    window.localStorage.setItem('id',x);
    window.localStorage.setItem('pass',x1);
    window.location.href = 'index.html';
  
}

$("#b1").click(f2)
function f2() {
    log=$("#login").val()

    x2=window.localStorage.getItem('id');
    if (log==x2)
    window.location.href = 'Home.html'
    else
    document.getElementById("d2").innerHTML=" Your Login information are Incorrect Try Again"

   
}

$("#bb1").click(f3)
function f3() {
    window.location.href = 'Api.html'
}
$("#bb2").click(f4)
function f4() {
    window.location.href = 'Home.html'
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() { 
        navigator.serviceWorker.register('/sw.js').then(function(registration) {

         }, function(err) { 
             // registration failed :(
                  console.log('ServiceWorker registration failed: ', err);
                });
                }); 
               }                 