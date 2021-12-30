function comprobar(){
    let exp = new RegExp ('^([a-zA-Z_$][a-zA-Z\\d_$]*)$')
    valor1 = document.getElementById("campo1").value;
    console.log(valor1);
    var valido1 = exp.test(valor1);
    console.log(valido1);
    valor2 = document.getElementById("campo2").value;
    console.log(valor2);
    var valido2 = exp.test(valor2);
    console.log(valido2);

    if(valido1 && valido2 == true){
        document.getElementById('respuesta').innerHTML = "ambos son correctos"
        document.getElementById('datos').style.display = "block";
    }
    else if(valido2 && valido1 == false){
        document.getElementById('respuesta').innerHTML = "el primer elemento es incorrecto"
        document.getElementById('datos').style.display = "none";
    }
    else if(valido1 && valido2 == false){
        document.getElementById('respuesta').innerHTML = "el segundo elemento es incorrecto"
        document.getElementById('datos').style.display = "none";
    }
    else if(valido1 == false && valido2 == false){
        document.getElementById('respuesta').innerHTML = " ambos elementos son incorrectos"
        document.getElementById('datos').style.display = "none";
    }
}