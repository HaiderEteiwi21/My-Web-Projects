
document.getElementById("mybutton").onclick=function(){
let name = document.getElementById("myinput").value;
document.getElementById("myH1").textContent =`welcome ${name}`;
}

const mycheckbox = document.getElementById("mycheckbox");
const mycotton = document.getElementById("mycotton");
const paper = document.getElementById("paper");
const silver = document.getElementById("silver");
const visa = document.getElementById("visa");
const cash = document.getElementById("cash");
const cliq = document.getElementById("cliq");
const mysubmit = document.getElementById("mysubmit");
const newsresult = document.getElementById("newsresult");
const matresult = document.getElementById("matresult");
const moneyresult = document.getElementById("moneyresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
newsresult.textContent=`we'll email you more news soon!`;
    }
    else{
        newsresult.textContent=`we won't email you any news !`;
    }
    if(mycotton.checked){
        matresult.textContent=`you have chosen the cotton`;
    }
   else if (paper.checked){
        matresult.textContent=`you have chosen the paper`;
    }
    else if(silver.checked){
        matresult.textContent=`you have chosen the silver`;
    }
    else{
        matresult.textContent=`you have to choose a material sir`;
    }
if(visa.checked){
    moneyresult.textContent=`you have chosen to pay with visa`;
}
else if (cash.checked){
    moneyresult.textContent=`you have chosen to pay cash`;
}
else if (cliq.checked){
    moneyresult.textContent=`you have chosen to pay with cliq`;
    
    }
    else
    {
        moneyresult.textContent=`you have to choose a way to pay with`;
    }
    }


