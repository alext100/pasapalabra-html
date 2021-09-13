let questions = [
    { letter: "a", answer: ["abducir", "atril", "alfil"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Soporte con un plano inclinado que sirve para sostener libros, papeles o partituras y leerlos con más comodidad.", "CON LA A. Pieza del juego del ajedrez que se mueve en diagonal y puede recorrer en un solo movimiento todos los cuadros que estén libres en una dirección."] },
    { letter: "b", answer: ["bingo", "bucle", "banco"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Conjunto de instrucciones cuya ejecución se repite hasta que una determinada condición de salida se vea satisfecha.", "CON LA B. Asiento para varias personas, largo y estrecho; a veces está fijado al suelo."] },
    { letter: "c", answer: ["churumbel", "cameo", "codo"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Aparición breve de una persona famosa en una película o una serie de televisión.", "CON LA C. Parte posterior y prominente de la articulación del brazo con el antebrazo."] },
    { letter: "d", answer: ["diarrea", "dolmen", "duende"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Monumento megalítico formado por una losa grande horizontal que se apoya sobre grandes piedras verticales.", "CON LA D. Ser fantástico que habita en determinados lugares produciendo alboroto y estruendo; los cuentos populares lo representan como un viejo o un niño juguetones, traviesos y burlones."] },
    { letter: "e", answer: ["ectoplasma", "erizo", "estadio"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Mamífero de unos 25 cm de longitud, color castaño oscuro, dorso y costados cubiertos de púas, hocico puntiagudo, y patas, cola y cabeza muy pequeñas; es omnívoro y nocturno, y abunda en casi toda Europa.", "CON LA E. Instalación deportiva de grandes dimensiones preparada para la práctica de ciertos deportes, como el atletismo, el fútbol o el béisbol, y con graderíos para los espectadores."] },
    { letter: "f", answer: ["facil", "fabada", "farol"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Plato que consiste en un guiso de alubias, chorizo, morcilla, tocino y costilla de cerdo; es típico de España, en particular de Asturias.", "CON LA F. Utensilio para alumbrar las calles que consiste en una luz eléctrica o de gas sostenida en un pie de hierro o soporte."] },
    { letter: "g", answer: ["galaxia", "garra", "gorro"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Cada una de las uñas fuertes, curvas y afiladas que tienen en el extremo de los dedos algunos vertebrados.", "CON LA G. Prenda de vestir que cubre y abriga la cabeza, generalmente de tela, piel o lana, y en especial la que tiene forma redonda y carece de ala o visera."] },
    { letter: "h", answer: ["harakiri", "hocico", "hilo"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Parte saliente y prolongada de la cara de algunos animales, especialmente mamíferos, en la que están situados la boca y los orificios nasales.", "CON LA H. Fibra elaborada, muy delgada, flexible y de longitud variable, que se obtiene de una materia textil de origen natural, artificial o sintético; se utiliza para coser y tejer."] },
    { letter: "i", answer: ["iglesia", "ikebana", "isla"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Arte de disponer las flores de forma decorativa, generalmente en grupos de tres clases distintas, según una antigua tradición japonesa para transmitir una idea místico-religiosa de perfección.", "CON LA I. Porción de tierra rodeada de agua por todas partes."] },
    { letter: "j", answer: ["jabali", "jazz", "juez"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Estilo musical nacido a finales del siglo XIX en las comunidades negras de Estados Unidos de América, cuyas canciones, de carácter principalmente instrumental, se caracterizan por tener una estructura base de ritmo y acordes sobre la cual los músicos van improvisando diferentes melodías con repetidas intervenciones solistas y con un frecuente uso de la sincopación.", "CON LA J. Persona que tiene autoridad para juzgar y sentenciar y es responsable de la aplicación de las leyes."] },
    { letter: "k", answer: ["kamikaze", "karaoke", "kart"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Aparato audiovisual con que se reproducen el fondo musical y, a la vez, las letras escritas de una serie de canciones ampliamente conocidas para que sean cantadas por una o varias personas como forma de entretenimiento.", "CON LA K. Automóvil monoplaza de pequeño tamaño que está provisto de un motor de dos tiempos y embrague automático y carece de caja de velocidades, carrocería y suspensión."] },
    { letter: "l", answer: ["licantropo", "lorca", "lana"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. El poeta de mayor influencia y popularidad de la literatura española del siglo XX y como dramaturgo se le considera una de las cimas del teatro español del siglo XX.", "CON LA L. Pelo que cubre el cuerpo de algunos mamíferos herbívoros, especialmente el de la oveja y carnero, que se utiliza como materia textil; se presenta en forma de hebras suaves y finas, más o menos rizadas y encrespadas."] },
    { letter: "m", answer: ["misantropo", "mapa", "matriz"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Representación geográfica de la Tierra, o de parte de ella, sobre una superficie plana, de acuerdo con una escala.", "CON LA M. Conjunto de números o signos algebraicos distribuidos en filas y columnas y dispuestos en forma de rectángulo sobre el que se definen ciertas operaciones."] },
    { letter: "n", answer: ["necedad", "nido", "nostalgia"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Refugio que construyen las aves con hierbas, ramas, plumas u otros materiales blandos para poner sus huevos y albergar a sus crías.", "CON LA N. Sentimiento de pena por la lejanía, la ausencia, la privación o la pérdida de alguien o algo queridos."] },
    { letter: "ñ", answer: ["señal", "niño", "cabaña"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Hijo, especialmente si es de corta edad.", "CONTIENE LA Ñ. Casa pequeña y tosca, generalmente en el campo, hecha de troncos o estacas entretejidas con caña y cubierta de ramas, destinada a albergar o refugiar a alguien."] },
    { letter: "o", answer: ["orco", "olfato", "otoño"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Sentido corporal que permite percibir y distinguir los olores.", "CON LA O. Estación del año comprendida entre el verano y el invierno"] },
    { letter: "p", answer: ["protoss", "parodia", "polen"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Imitación burlesca de un género, de una obra artística o literaria, del estilo de un escritor, o de los gestos o manera de ser de una persona.", "CON LA P. Polvo fino y fecundante contenido en la antera de los estambres de las flores."] },
    { letter: "q", answer: ["queso", "quimera", "quiosco"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Monstruo fabuloso que se representa con cabeza de león, cuerpo de cabra y cola de dragón.", "CON LA Q. Local comercial de pequeño tamaño destinado a la venta de periódicos, revistas, golosinas y otros artículos, que puede estar construido con materiales ligeros y emplazado en las calles y lugares públicos."] },
    { letter: "r", answer: ["raton", "rabo", "radar"], status: 0, question: ["CON LA R. Roedor", "CON LA R. Cola de los cuadrúpedos y otros vertebrados terrestres.", "CON LA R. Sistema de detección de objetos empleado en aeronáutica, navegación, astronomía, etc., que sirve para indicar la presencia de un objeto y determinar la distancia a la que se halla, mediante la emisión de ondas especiales de altísima frecuencia reflejadas en él."] },
    { letter: "s", answer: ["stackoverflow", "sabio", "soneto"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Que muestra buen juicio, prudencia y madurez en sus actos y decisiones.", "CON LA S. Composición poética formada por catorce versos de arte mayor, generalmente endecasílabos, y rima consonante, que se distribuyen en dos cuartetos y dos tercetos."] },
    { letter: "t", answer: ["terminator", "tema", "toga"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Melodía o idea fundamental de una composición musical que se va repitiendo y desarrollando de distintas formas a lo largo de toda la composición.", "CON LA T. Manto amplio y largo que los antiguos romanos llevaban sobre la túnica de diferentes maneras y que generalmente se recogía sobre el hombro izquierdo; solía hacerse de lino en verano y de lana en invierno."] },
    { letter: "u", answer: ["unamuno", "uber", "urano"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Empresa estadounidense que proporciona a sus clientes a nivel internacional vehículos de transporte con conductor (VTC), a través de su software de aplicación móvil (app).", "CON LA U. El séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo"] },
    { letter: "v", answer: ["vikingos", "vago", "vacuna"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Que tiene poca disposición para hacer algo que requiere esfuerzo o constituye una obligación, especialmente trabajar.", "CON LA V. Sustancia compuesta por una suspensión de microorganismos atenuados o muertos que se introduce en el organismo para prevenir y tratar determinadas enfermedades infecciosas; estimula la formación de anticuerpos con lo que se consigue una inmunización contra estas enfermedades."] },
    { letter: "w", answer: ["sandwich", "watt", "william"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Unidad de potencia del Sistema Internacional, de símbolo W, que equivale a la potencia capaz de conseguir una producción de energía igual a 1 julio por segundo.", "CON LA W. Nombre de un dramaturgo, poeta y actor inglés, autor de Romeo y Julieta"] },
    { letter: "x", answer: ["botox", "examen", "boxeo"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Prueba escrita u oral que se realiza para demostrar la suficiencia en una materia determinada o la aptitud para cierta actividad o cargo.", "CONTIENE LA X. Deporte de combate en el que dos personas de la misma categoría de peso luchan entre sí golpeándose con los puños, empleando para ello unos guantes especiales y siguiendo unas reglas específicas; se practica sobre un ring o cuadrilátero durante un número determinado de asaltos, generalmente de tres minutos de duración; gana el boxeador que consigue noquear al adversario o, si esto no ocurre, aquel que deciden los jueces."] },
    { letter: "y", answer: ["peyote", "yema", "yeti"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CON LA Y. Núcleo de los huevos de los vertebrados ovíparos; es esferoidal, de color amarillo y está rodeada por la clara.", "CON LA Y. Ser fantástico y gigantesco con figura humana y con el cuerpo cubierto de pelo; según una leyenda habita en las regiones del Himalaya."] },
    { letter: "z", answer: ["zen", "zombi", "zoo"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Muerto que ha sido revivido mediante un rito mágico y que carece de voluntad propia, según ciertas leyendas de Haití y del sur de Estados Unidos de América.", "CON LA Z. Recinto con instalaciones adecuadas para conservar, cuidar y criar especies diferentes de animales, especialmente salvajes y exóticos, que puede ser visitado por el público."] },
]

const container = document.querySelector(".container");
//console.log('container: ', container);
const playButton = document.querySelector(".play_button_div");
//console.log('playButton: ', playButton);
const square = document.querySelectorAll(".square");
//console.log('square: ', square);
const letrasSpans = document.querySelectorAll("span");
//console.log('letrasSpans: ', letrasSpans);
const blocks = document.querySelectorAll(".block");
//console.log('blocks: ', blocks);
const questionParagraph = document.querySelector(".question");
//console.log('questionParagraph: ', questionParagraph);
const answerParagraph = document.querySelector(".answer_paragraph");
//console.log('answerParagraph: ', answerParagraph);
const buttonsBlock = document.querySelectorAll(".button")
    //console.log('buttonsBlock: ', buttonsBlock);
const answerVal = document.querySelector("#answer");
const responderButton = document.querySelector("#responder");

let r = "";
let letraAngle = 270;
let blockAngle = 90;

let newQuestions = [];
let currentLetter = "";
let index;

Array.from(letrasSpans).forEach(item => {
    r = "rotate(" + letraAngle + "deg)";
    item.style.transform = r;
    letraAngle -= 13.3333;
});

Array.from(blocks).forEach(item => {
    r = "rotate(" + blockAngle + "deg)";
    item.style.transform = r;
    blockAngle += 13.3333;
});

container.addEventListener("click", function(event) {
    // Check to see if a "round" element was the trigger for the event
    if (event.target.classList.contains("square")) {
        // Style the trigger based on adding/removing the pre-existing class
        event.target.classList.toggle("activeCircle")
    }
});

function getNewRandomQuestions(array) { // Del array inicial, formamos un nuevo array con preguntas aleotorias.
    let index = Math.floor(Math.random() * 3);
    newQuestions = array.map(({ letter, answer, status, question }) => ({ letter, answer: answer[index], status, question: question[index] }));
    return newQuestions;
}
//getNewRandomQuestions(questions);

//let userQuestion = arr[17];
//let inputAnswer = "";




function currentUserAnswer() {
    return answerVal.value;
}

function updateAnswer() {
    answerVal.value = '';
}


function changeLetterColor() {
    for (let item of letrasSpans) {
        if (currentLetter !== item.textContent) {
            item.parentElement.classList.remove("activeCircle");
        } else item.parentElement.classList.add("activeCircle");
    }
}

function updateQuestions() {
    return newArrayQuestions.filter(arr => arr.status === 0);
}
//const newArrayQuestions = getNewQuestions();

function updateLetter() {
    for (let i = 0; i < newArrayQuestions.length; i++) {
        if (currentLetter === newArrayQuestions[i].letter) {
            i++;
            index++;
            console.log('index: ', index);
            currentLetter = newArrayQuestions[i].letter;
        }
    }
    console.log('currentLetter: ', currentLetter);
    return currentLetter;
}

function showNextQuestion() {
    questionParagraph.textContent = newArrayQuestions[index].question;
}

function checkAnswer() {
    let answ = currentUserAnswer(); //answerVal.value
    if (answ.toLowerCase() !== null && answ.toLowerCase() === newArrayQuestions[index].answer) {
        answerParagraph.textContent = answ;
        console.log("correcto!")
    } else {
        console.log("Incorrecto!");
        answerParagraph.textContent = answ;
    }
    updateLetter();
    updateAnswer(); //  answerVal.value = ''
    changeLetterColor();
    showNextQuestion()
}

function startGame() {
    index = 0;
    updateAnswer(); //  answerVal.value = ''
    newArrayQuestions = getNewRandomQuestions(questions); //newQuestions.filter(arr => arr.status === 0);
    currentLetter = newArrayQuestions[index].letter;
    questionParagraph.textContent = newArrayQuestions[index].question;
    changeLetterColor();
    console.log("start");
}









window.onkeydown = function(event) {

    if (event.keyCode === 13) {
        checkAnswer()
    }
};

responderButton.addEventListener("click", (event) => {
    checkAnswer();
})

playButton.addEventListener("click", (event) => {
    if (event.target.nodeName === 'BUTTON') {
        startGame();
    }
})