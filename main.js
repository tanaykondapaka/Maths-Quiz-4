function loadpage(){
    var pl1_n=document.
 getElementById
 ("pl1_inp").
 value
 var pl2_n=document.getElementById("pl2_inp").value
    setTimeout(function(){ window.location="nextpage.html"; }, 3000);
    localStorage.setItem("pl1_n",pl1_n)
    localStorage.setItem("pl2_n",pl2_n)
   
    }
