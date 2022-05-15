var firstnum;
var secondnum;
var opration;
var res;
var temp;
var calc;
 function printNumbers(x){
  if(opration != null){ 
     if(secondnum !=  null){
         temp=secondnum;
         calc= (secondnum*10+x);
         secondnum=calc;
         document.getElementById("result").innerHTML = secondnum;     
     }
     else{
       document.getElementById("result").innerHTML = x;
       secondnum=x;
     }
 }
 else {
     if(firstnum !=  null){
         temp=firstnum;
         calc= (firstnum*10+x);
         firstnum=calc;
         document.getElementById("result").innerHTML = firstnum; 
         
     }
     else{
       document.getElementById("result").innerHTML = x;
       firstnum= x;
     }
 }
 
} 

function reset(){
 firstnum = 0;
 secondnum = 0;
 res=0;
 temp=0;
 opration=null;
 document.getElementById("result").innerHTML =0;  
}
function add(x){
     opration=x;   
 }
 function end(){
     if(opration==1){
        res= firstnum +  secondnum;
        document.getElementById("result").innerHTML =res;  
     }
     else if(opration==2){
         res= firstnum -  secondnum;
        document.getElementById("result").innerHTML =res;   
     }
     else if(opration==3){
         res= firstnum *  secondnum;
        document.getElementById("result").innerHTML =res;   
     }
     else if(opration==4){
         res= firstnum /  secondnum;
        document.getElementById("result").innerHTML =res;   
     }
     else if(opration==5){
        res=  Math.pow(firstnum,secondnum) ;
       document.getElementById("result").innerHTML =res;   
     }
    }