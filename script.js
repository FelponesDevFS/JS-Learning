 function clicar(){
    var body = window.document.body;
    var botao = window.document.querySelector("button");
    
    if(body.style.backgroundColor == "white" || body.style.backgroundColor == "")
    {
        body.style.backgroundColor = "black";
        botao.style.color = "black";
        botao.style.border = "none";
        botao.style.padding = "10px 20px";
        botao.style.borderRadius = "5px";
        botao.style.backgroundColor = "white";
        botao.innerHTML = "Claro";
    }
    else{
        body.style.backgroundColor = "white";
        botao.innerHTML = "Escuro";
        botao.style.color = "white";
        botao.style.border = "none";
        botao.style.padding = "10px 20px";
        botao.style.borderRadius = "5px";
        botao.style.backgroundColor = "black";
    }
}
 function entrar(){
   
}