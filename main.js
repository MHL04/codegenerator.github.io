//recuperation des elements html 
const btnEl=document.querySelector(".btn");

const inputEl=document.getElementById("input");

const faCopyEL=document.querySelector(".fa-copy");
const alertContaiEl=document.querySelector(".alert-container");

//ajout d un ecouteur devennement click surle boutton
btnEl.addEventListener("click", ()=>{
    createCode();
});
//ajout d un ecouteur d evennement click surle boutton
faCopyEL.addEventListener("click" ,()=>{
    copyCode();
    if(inputEl.value){
        alertContaiEl.classList.remove("active");
    setTimeout(()=>{
        alertContaiEl.classList.add("active");
    },2000); 
    }
});

let copyCode=()=>{

    //permettre de selection l'input
    inputEl.select();
    //définit les positions de début et de fin de la sélection de texte actuelle dans un élément 
    inputEl.setSelectionRange(0,9999);
    //copy coller
    navigator.clipboard.writeText(inputEl.value);
}



let createCode=()=>{
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^^&*()_+-{}|[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const codeLength=16;
    let code="";
    for (let index = 0; index < codeLength; index++) {
        const randomNum=Math.floor(Math.random() * chars.length);
         code += chars.substring(randomNum ,randomNum + 1);
      
    }
    inputEl.value=code; 
    alertContaiEl.innerText= code + " copied";  
}
