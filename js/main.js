// 1. PRIMERA PARTE. 
// Clave de acceso: Incluye funciones y ciclo while.

// Asignación de funciones

let solicitarClave = "Para comprobar que no eres un bot, te pedimos digites la palabra clave que figurará a continuación. \n \nIMPORTANTE: Debes substraer los guiones para descubrirla.";
let claveDefinida = "h-a-che-de";

// Función para carteles de aviso

function aviso (variable){
    alert(variable);
}

aviso(solicitarClave);

// Funciones para ingreso por prompt

function promptIngreso(preguntaPrompt){
    datoIngresado = 0;
    return datoIngresado = prompt(preguntaPrompt);
}

promptIngreso(claveDefinida);

// Ciclo while

function condicionClave(claveCorrecta) {

    let solicitarClave = "Para comprobar que no eres un bot, te pedimos digites la palabra clave que figurará a continuación. \n \nIMPORTANTE: Debes substraer los guiones para descubrirla.";
    let claveDefinida = "h-a-che-de";

    while (claveCorrecta != "hachede"){

        alert(solicitarClave);
        claveCorrecta = prompt(claveDefinida);
    }
}

condicionClave(datoIngresado);

// 2. SEGUNDA PARTE
// Diferencias tipo de usuario: incluye función y condicional

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


// 2.1. COTIZADOR
// Condicional "Si es músico el usuario"

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


// Función sumatoria de costos

function totalCost(item1, item2, item3, item4) {

    return totalItems = item1 + item2 + item3 + item4;

}

totalCost(cost01, cost02, cost03, cost04);

// Función de aviso de totalización

function avisoSumatoria(variableSumatoria) {

    alert("Tu presupuesto es de " + variableSumatoria + "$ \n Para hacer realidad este proyecto puedes dirigirte a nosotros en la etiqueta de contacto");
    
}

avisoSumatoria(totalItems);
}

// 2.2 FORMULARIO
// Condicional "Si es diseñador"

else if (tipoDeUsuario == 2) {
bandaIngreso = "Ingresa el nombre de tu banda.";
correoIngreso = "Ingresa tu correo.";
numeroIngreso = "Ingresa tu número de contacto.";
formularioAviso = "Estamos emocionados por conocerte, te estaremos contactando a la brevedad.";

promptIngreso(bandaIngreso);
promptIngreso(correoIngreso);
promptIngreso(numeroIngreso);

// Aviso de formulario

aviso(formularioAviso);

}