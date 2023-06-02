

var bigtext = document.getElementById("bigtext");
var pay = document.getElementById("pay");
bigtext.style.opacity="1";
bigtext.style.transition="3s";

bigtext.addEventListener("transitionend", function (e) {
    bigtext.style.opacity="0";
    bigtext.style.transition="2s";
    bigtext.addEventListener("transitionend", function (e) {
        bigtext.innerHTML="One more thing"
        bigtext.style.opacity="1";
        bigtext.style.transition="3s";
        bigtext.addEventListener("transitionend", function (e) {
            bigtext.style.opacity="0";

            bigtext.style.transition="2s";
            bigtext.addEventListener("transitionend", function (e) {
                bigtext.style.top = "15%";
                bigtext.style.opacity="1";
                bigtext.innerHTML="What will you charge per hour?"

                bigtext.addEventListener("transitionend", function (e) {

                    pay.style.visibility="visible";
                    pay.style.opacity="1";

                    pay.style.transition="1s";
                    pay.addEventListener("transitionend", function (e) {
                        pay.focus();
                        
                        
                    });
                    
                });
                
            });
            
        });

        
    });
    
});


document.getElementById("input").onfocus=function() {
    var info = document.getElementById("info");
    info.style.opacity="1";
    info.style.transition="1s";
    info.addEventListener("transitionend", function (e) {
        setTimeout(waittime, 6000);
    })
    
 };
 document.getElementById('input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        waittime();
      return false;
    }
  }
 function waittime(){

     window.location.href = "page.html";
 }