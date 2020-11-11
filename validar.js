function _limpaCampo(id){
    document.getElementById(id).value = '';
}
function _mostraErro(id,mensagem){
   var campo = document.getElementById(id);
   campo.innerText = mensagem;
   campo.style.display = 'block';
}

function isValidCPF() {
    document.getElementById ('erroCPF').style.display = 'none';
    var idCPF = 'inputCpf';
    var cpf = document.getElementById(idCPF).value;

    if (typeof cpf !== "string"){
        _limpaCampo(idCPF);
        _mostraErro('erroCPF','CPF Inválido')
        return false
    }
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        _limpaCampo(idCPF);
        _mostraErro('erroCPF','CPF Inválido')
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i)
    }
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ){
        _limpaCampo(idCPF);
        _mostraErro('erroCPF','CPF Inválido')
        return false
    }
    soma = 0
    for (var i = 1; i <= 10; i++){
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ){
        _limpaCampo(idCPF);
        _mostraErro('erroCPF','CPF Inválido')
        return false
    }  
}

function isValidEmail(){
    document.getElementById ('erroEmail').style.display = 'none';
    var email = document.getElementById('inputEmail').value;
    var reg  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!reg.test(email)){
        _limpaCampo('inputEmail')
        _mostraErro('erroEmail','Email inválido')
        return false
    }
} /* reg é regex para validação de email*/