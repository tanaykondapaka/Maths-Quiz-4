var player1_n=localStorage.getItem("pl1_n")
var player2_n=localStorage.getItem("pl2_n")
console.log(player1_n)
console.log(player2_n)
document.getElementById("pl1_n").innerHTML = player1_n +" : "
document.getElementById("pl2_n").innerHTML = player2_n+" : "
var pl1_s = 0;
var pl2_s = 0;
var answer;
document.getElementById("pl1_s").innerHTML=pl1_s
document.getElementById("pl2_s").innerHTML=pl2_s
questioner=player1_n
answerer=player2_n
document.getElementById("question").innerHTML=questioner
document.getElementById("answer").innerHTML=answerer
function submit(){
 var number1=document.getElementById("pl1_inp").value;
   var number2=document.getElementById("pl2_inp").value;
    document.getElementById("contents").style.display="none"
    document.getElementById("output").innerHTML="<h6 id='question_t'><b>Q.</b>"+number1+"×"+number2+"=?</h6>"+"<br>"+"<input id='answer_inp'type='number' placeholder='Enter Answer'>"+"<br>"+"<button id='button_send' onclick='check()'>Send</button>";
    

    
    answer = number1*number2;

}


function check(){
    
var attempt=document.getElementById("answer_inp").value

if(attempt==answer){
    if(player1_n==answerer){
        
        pl1_s=pl1_s+1
        document.getElementById("pl1_s").innerHTML=pl1_s
        
        answerer=player2_n
        questioner=player1_n
    }
    else{
       
        pl2_s=pl2_s+1
        document.getElementById("pl2_s").innerHTML=pl2_s    
    }
    if(player1_n==answerer){
        
        answerer=player2_n
        questioner=player1_n
        document.getElementById("answer").innerHTML=player2_n
        
    }
    else{
        answerer=player1_n
        questioner=player2_n
        document.getElementById("answer").innerHTML=player1_n   
    }
    if(questioner=player1_n){
        questioner=player2_n
        answerer=player1_n        
        document.getElementById("question").innerHTML=player2_n
    }
    else{
        questioner=player2_n
        answerer=player1_n       
        document.getElementById("question").innerHTML=player2_n
    }
}
else{
    
    if(questioner==player1_n)
      {   
          pl1_s=pl1_s+1;
          document.getElementById("pl1_s").innerHTML=pl1_s
      }
      else
      {
        
          pl2_s=pl2_s+1;
          document.getElementById("pl2_s").innerHTML=pl2_s

      }
      if(answerer==player1_n)
      {
       answerer=player2_n;
       document.getElementById("answer").innerHTML= player2_n
      }
      else
      {
       answerer=player1_n;
       document.getElementById("answer").innerHTML= player1_n
      }
 
      if(questioner==player1_n)
      {
       questioner=player2_n;
       document.getElementById("question").innerHTML= player2_n
      }
      else
      {
       questioner=player1_n;
       document.getElementById("question").innerHTML= player1_n
      }
}

document.getElementById("output").innerHTML=""
document.getElementById("contents").style.display="inline-block"
document.getElementById("pl1_inp").value=""
document.getElementById("pl2_inp").value=""
}


