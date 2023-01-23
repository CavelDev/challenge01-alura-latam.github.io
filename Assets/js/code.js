function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

function saltarLinea() {
    document.write("<br><br>")
}

//FUNCION QUE CAMBIA PARAMETROS CSS PARA DISEÑO RESPONSIVE
function identificarPantalla(){
    if(innerWidth <= 480) {
        //alert("ESTA ES UNA PANTALLA PARA MOVIL")
        let altura = document.querySelector(".area-escritura-der").style.height = "70%";
        document.querySelector(".panel-der").style.height = altura;

        document.querySelector(".area-footer").style.margin = "100% 0% 0%";
    }
    else if((innerWidth > 480) && (innerWidth <= 820) ) {
        //alert("ESTA ES UNA PANTALLA PARA TABLET")
        let altura = document.querySelector(".area-escritura-der").style.height = "60%";
        document.querySelector(".panel-der").style.height = altura;

        document.querySelector(".area-footer").style.margin = "60% 0% 0%";
    }
    else if(innerWidth > 820) {
        //alert("ESTA ES UNA PANTALLA PARA PC")
        document.getElementById("img-persona").style.display = "none";
        let altura = document.querySelector(".area-escritura-der").style.height = "75%";
    }
    else{
        //alert("LAS DIMENSIONES DE LA PANTALLA SON INCOMPATIBLES CON EL PROGRAMA");
    }
}


//FUNCION PARA ENCRIPTAR DATOS
function encriptar(){
    //Selecciona el TextArea y convierte todas sus letras en minusculas
    var texto = document.getElementById("input-textarea").value.toLowerCase();

    //i = afectar letras mayusculas y minusculas
    //g = afectar una oracion o linea
    //m = afectar multiples lineas

    //a = ai
    var encriptacion = texto.replace(/a/igm, "ai");
    //e = enter
    var encriptacion = encriptacion.replace(/e/igm, "enter");
    //i = imes
    var encriptacion = encriptacion.replace(/i/igm, "imes");
    //o = ober
    var encriptacion = encriptacion.replace(/o/igm, "ober");
    //u = ufat
    var encriptacion = encriptacion.replace(/u/igm, "ufat");

    identificarPantalla();
    
    //SELECCION CON ID
    document.getElementById("no-msm").style.display = "none";
    document.getElementById("no-msm2").style.display = "none";
    document.querySelector(".area-escritura-der").style.visibility = "visible";
    document.getElementById("output-textarea").innerHTML = encriptacion;
    document.getElementById("btn_copiar").style.display = "show";
    document.getElementById("btn_copiar").style.display = "inherit";
}

//FUNCION PARA ENCRIPTAR DATOS
function desencriptar(){

    var texto = document.getElementById("input-textarea").value.toLowerCase();

    //imes = i
    var encriptacion = texto.replace(/imes/igm, "i");
    //ai = a
    var encriptacion = encriptacion.replace(/ai/igm, "a");
    //enter = e 
    var encriptacion = encriptacion.replace(/enter/igm, "e");
    //ober = o
    var encriptacion = encriptacion.replace(/ober/igm, "o");
    //ufat = u
    var encriptacion = encriptacion.replace(/ufat/igm, "u");

    identificarPantalla();

    document.getElementById("no-msm").style.display = "none";
    document.getElementById("no-msm2").style.display = "none";
    document.querySelector(".area-escritura-der").style.visibility = "visible";
    document.getElementById("output-textarea").innerHTML = encriptacion;
    document.getElementById("btn_copiar").style.display = "show";
    document.getElementById("btn_copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#output-textarea");
    contenido.select();
    document.execCommand("copy");
    //alert("COPIADO")
}