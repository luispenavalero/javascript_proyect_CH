// 1. PRIMERA PARTE
// Diferencias tipo de usuario: incluye función, condicional y array

function promptIngreso(preguntaPrompt){
    datoIngresado = 0;
    return datoIngresado = prompt(preguntaPrompt);
}

// Prompt para ingresar tipo de usuario.

let textTipoUsuario = "Para ofrecerte la mejor experiencia, ya sea quieras encargar un trabajo o hacerte parte de nuestro equipo, te ofrecemos varias opciones \n \nDigita: \n1. Si eres músico. \n2. Si eres diseñador. \nx. Cualquier otro valor, si no eres ninguno.";

let tipoDeUsuario;

tipoDeUsuario = promptIngreso(textTipoUsuario);

// Switch para determinar tipo de usuario, incluye fución.

function switchFunction (switchKey) {

    switch (switchKey) {
        case "1":
            alert("¡Te damos la bienvenida! En Hachedé te invitamos a probar nuestro cotizador");
            break;
        case "2":
            alert("¡Te damos la bienvenida! Si querés subir a bordo, contactanos a través del formulario de la web.");
            break;
        default:
            alert("¡Te damos la bienvenida!");
            break;
    }
}

switchFunction(tipoDeUsuario);


// COTIZADOR
// Condicional "Si es músico el usuario", incluye array

if (tipoDeUsuario == 1) {    

// Datos que requiere el cotizador (prompts)

let albumCost = "¿Quieres un diseño de portada? \n Envía 1 para 'Sí' \n Cualquier otro caracter para 'No'";
let identWeb = "¿Quieres un diseño de identidad web? \n Envía 1 para 'Sí' \n Cualquier otro caracter para 'No'";
let pagWeb = "¿Quieres un diseño de página web? \n Envía 1 para 'Sí' \n Cualquier otro caracter para 'No'";
let poster = "¿Quieres un diseño de poster? \n Envía 1 para 'Sí' \n Cualquier otro caracter para 'No'";

// Función del cotizador

promptIngreso(albumCost);

function contador(paramContador, costo) {
    dataCont = paramContador;

    if (dataCont == 1) {
        return dataCont = costo;
    }
    else {
        return dataCont = 0;
    }
}

// Demás consultas a la función del prompt y el contador

cost01 = contador(datoIngresado, 2600);

promptIngreso(identWeb);

cost02 = contador(datoIngresado, 2400);

promptIngreso(pagWeb);

cost03 = contador(datoIngresado, 2000);

promptIngreso(poster);

cost04 = contador(datoIngresado, 1000);


// Array de costos 

const sumatoriaCostos = [cost01, cost02, cost03, cost04];

// Filtrado de costos (sumatoria)

const total = sumatoriaCostos.reduce((acc, el)=>{
    return acc + el;
},0);

// Aviso de resultado

alert("Tu presupuesto es de " + total + "$ \n Para hacer realidad este proyecto puedes dirigirte a nosotros en la etiqueta de contacto");
    
}

// FORMULARIO
// Condicional "Si es diseñador", incluye objeto, clase constructora.

else if (tipoDeUsuario == 2) {
bandaIngreso = "Ingresa tu nombre.";
correoIngreso = "Ingresa tu correo.";
numeroIngreso = "Ingresa tu número de contacto.";
formularioAviso = "Estamos emocionados por conocerte, te estaremos contactando a la brevedad.";

let nombreDi = promptIngreso(nombreDiIngreso);
let correo = promptIngreso(correoIngreso);
let numero = promptIngreso(numeroIngreso);

//Clase constructora

class datosEnviar {
    constructor(nombreDi, correo, numero) {
        this.nombreDi = nombreDi;
        this.correo = correo;
        this.numero = numero;
    }
}

const misDatos = new datosEnviar(banda, correo, numero);


// Aviso de formulario

alert("Gracias por brindarnos tus datos de contacto " + misDatos.banda + "\nEstamos emocionados de contactarte por los siguientes medios: \n" + "\n" + misDatos.numero + "\n" + misDatos.correo);
}