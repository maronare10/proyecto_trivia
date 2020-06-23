let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const nameInput = document.getElementById('nameInput');  //  caja de texto para ingresar el nombre
const playButton = document.getElementById('playButton');  //  primer boton de la pantalla1
const historyTopicButton = document.getElementById('historyTopicButton');  //  boton para elegir temade historia
const mathTopicButton = document.getElementById('mathTopicButton');  //  boton r para elegir tema de matemática
const backButtonPantalla2 = document.getElementById('backButtonPantalla2');  //  bóton para regresar a la pantalla1
const backButtonTopic1 = document.getElementById('backButtonTopic1'); //  boton regresar para elegir tema
const backButtonTopic2 = document.getElementById('backButtonTopic2'); //  boton regresar para elegir tema
const starButton = document.getElementById('starButton');  //  llamando al boton de empezar a jugar que está en la pantalla9
const keepPlayingButton = document.getElementById('keepPlayingButton');  //  llamando al boton de seguir jugando de la pantalla9

const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3History = document.getElementById('pantalla3History');
const pantalla4History = document.getElementById('pantalla4History');
const pantalla5History = document.getElementById('pantalla5History');
const pantalla6Math = document.getElementById('pantalla6Math');
const pantalla7Math = document.getElementById('pantalla7Math');
const pantalla8Math = document.getElementById('pantalla8Math');
const pantalla9 = document.getElementById('pantalla9');

const answer2Question1Topic1 = document.getElementById('answer2Question1Topic1');  //  estos son los botones de alternativas de la pregunta1 topic1
const answer3Question1Topic1 = document.getElementById('answer3Question1Topic1');
const answer1Question1Topic1 = document.getElementById('answer1Question1Topic1');  //  enlazo al boton del HTML

const answer1Question2Topic1 = document.getElementById('answer1Question2Topic1')
const answer2Question2Topic1 = document.getElementById('answer2Question2Topic1')
const answer3Question2Topic1 = document.getElementById('answer3Question2Topic1')

const answer1Question3Topic1 = document.getElementById('answer1Question3Topic1')
const answer2Question3Topic1 = document.getElementById('answer2Question3Topic1')
const answer3Question3Topic1 = document.getElementById('answer3Question3Topic1')

const answer1Question1Topic2 = document.getElementById('answer1Question1Topic2');  //  con la funcion getElementById enlazo al boton del HTML
const answer2Question1Topic2 = document.getElementById('answer2Question1Topic2');
const answer3Question1Topic2 = document.getElementById('answer3Question1Topic2');

const answer1Question2Topic2 = document.getElementById('answer1Question2Topic2')
const answer2Question2Topic2 = document.getElementById('answer2Question2Topic2')
const answer3Question2Topic2 = document.getElementById('answer3Question2Topic2')

const answer1Question3Topic2 = document.getElementById('answer1Question3Topic2')
const answer2Question3Topic2 = document.getElementById('answer2Question3Topic2')
const answer3Question3Topic2 = document.getElementById('answer3Question3Topic2')

playButton.addEventListener('click', play);
historyTopicButton.addEventListener('click', topic1);
mathTopicButton.addEventListener('click', topic2);
backButtonPantalla2.addEventListener('click', backPantalla);  //capturo el evento click del boton y le digo que use la función
backButtonTopic1.addEventListener('click', backTopic1);
backButtonTopic2.addEventListener('click', backTopic2);
starButton.addEventListener('click', star);
keepPlayingButton.addEventListener('click', keepPlaying);

answer1Question1Topic1.addEventListener('click', answer1Topic1);  // capturando el click  e indicándole que realice la función
answer2Question1Topic1.addEventListener('click', answer1Topic1);
answer3Question1Topic1.addEventListener('click', answer1Topic1);

answer1Question2Topic1.addEventListener('click', answer2Topic1);
answer2Question2Topic1.addEventListener('click', answer2Topic1);
answer3Question2Topic1.addEventListener('click', answer2Topic1);

answer1Question3Topic1.addEventListener('click', answer3Topic1);
answer2Question3Topic1.addEventListener('click', answer3Topic1);
answer3Question3Topic1.addEventListener('click', answer3Topic1);


answer1Question1Topic2.addEventListener('click', answer1Topic2);
answer2Question1Topic2.addEventListener('click', answer1Topic2);
answer3Question1Topic2.addEventListener('click', answer1Topic2);

answer1Question2Topic2.addEventListener('click', answer2Topic2);
answer2Question2Topic2.addEventListener('click', answer2Topic2);
answer3Question2Topic2.addEventListener('click', answer2Topic2);

answer1Question3Topic2.addEventListener('click', answer3Topic2);
answer2Question3Topic2.addEventListener('click', answer3Topic2);
answer3Question3Topic2.addEventListener('click', answer3Topic2);

function answer1Topic1 (event){  //  aquí se indican las funciones que debe realizar
  const respuestaCorrecta = "Ica"  
  const respuestaUsuario = event.target.value  //  valor del boton  que presione
  if (respuestaCorrecta === respuestaUsuario){  //  identificar respuestas correctas 
    respuestasCorrectas += 1;  //  incrementar el valor de respuestas correctas
  } else {
    respuestasIncorrectas += 1;  //  incrementa el valor de respuestas incorrectas
  }
  pantalla3History.classList.toggle('mostrar');  //  muestra y oculta la pantalla
  pantalla4History.classList.toggle('mostrar');
  // console.log(respuestasCorrectas);
  // console.log(respuestasIncorrectas);
  // console.log(event)
  // console.log(event.target.value)
}

function answer2Topic1 (event) {
  const respuestaCorrecta="Chan Chan";
  const respuestaUsuario = event.target.value;
  if (respuestaCorrecta === respuestaUsuario){
    respuestasCorrectas += 1;
  } else{
    respuestasIncorrectas += 1;
  }
  pantalla4History.classList.toggle('mostrar');
  pantalla5History.classList.toggle('mostrar');
}

function answer3Topic1 (event) {
  const respuestaCorrecta = "Toquepala";
  const respuestaUsuario = event.target.value; // target indica el boton seleccionado
  if (respuestaCorrecta === respuestaUsuario) {
    respuestasCorrectas += 1;
  } else{
    respuestasIncorrectas += 1;
  }
  pantalla5History.classList.toggle('mostrar');
  pantalla9.classList.toggle('mostrar');

  const totalCorrect = document.getElementById('totalCorrect');
  totalCorrect.innerHTML =  '✔ Respuestas correctas: '  + respuestasCorrectas;  //  cambiar texto en pantalla 9

  const totalIncorrect = document.getElementById('totalIncorrect');
  totalIncorrect.innerHTML =  '✘ Respuestas incorrectas: '  + respuestasIncorrectas;  //  cambiar texto en pantalla 9

  const smile = document.getElementById('smile');
  const message = document.getElementById('message');
  if (respuestasCorrectas === 3 || respuestasCorrectas === 2) {
    smile.src = 'imagenes/sonreir.png';
    message.innerHTML = '¡Felicidades!';
  } else {
      smile.src = 'imagenes/triste.png';
      message.innerHTML = '¡Sigue intentando!';
  }

  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
}

function answer1Topic2 (event){  //  aquí se indican las funciones que debe realizar
  const respuestaCorrecta= "Heptágono"  
  const respuestaUsuario = event.target.value  //  valor del boton  que presione
  if (respuestaCorrecta === respuestaUsuario){  //  identificar respuestas correctas 
    respuestasCorrectas += 1;  //  incrementar el valor de respuestas correctas
  } else {
    respuestasIncorrectas += 1;  //  incrementa el valor de respuestas incorrectas
  }
  pantalla6Math.classList.toggle('mostrar');  //  nos manda a la pantalla siguiente
  pantalla7Math.classList.toggle('mostrar');

}

function answer2Topic2 (event) {
  const respuestaCorrecta="Isósceles";
  const respuestaUsuario = event.target.value;
  if (respuestaCorrecta === respuestaUsuario){
    respuestasCorrectas += 1;
  } else{
    respuestasIncorrectas += 1;
  }
  pantalla7Math.classList.toggle('mostrar');
  pantalla8Math.classList.toggle('mostrar');
}

function answer3Topic2 (event) {
  const respuestaCorrecta = "100 metros";
  const respuestaUsuario = event.target.value; // target indica el boton seleccionado
  if (respuestaCorrecta === respuestaUsuario) {
    respuestasCorrectas += 1;
  } else{
    respuestasIncorrectas += 1;
  }
  pantalla8Math.classList.toggle('mostrar');
  pantalla9.classList.toggle('mostrar');

  const totalCorrect = document.getElementById('totalCorrect');
  totalCorrect.innerHTML =  '✔ Respuestas correctas: ' + respuestasCorrectas;  //  cambiar texto en pantalla 9
  const totalIncorrect = document.getElementById('totalIncorrect');
  totalIncorrect.innerHTML =  '✘ Respuestas incorrectas: '  + respuestasIncorrectas;  //  cambiar texto en pantalla 9

  const smile = document.getElementById('smile');
  const message = document.getElementById('message');
  if (respuestasCorrectas === 3 || respuestasCorrectas === 2) {
    smile.src = "https://image.flaticon.com/icons/svg/742/742751.svg";
    message.innerHTML = '¡Felicidades!';
  } else {
    smile.src = "https://image.flaticon.com/icons/svg/742/742758.svg";
    message.innerHTML = '¡Sigue intentando!';
  }

  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
}

function play(event) {
  const greetingTag = document.getElementById('greeting');
  greetingTag.innerHTML = '¡Hola ' + nameInput.value + '!';

  pantalla1.classList.toggle('mostrar');
  pantalla2.classList.toggle('mostrar');
  // console.log('Hola '+ nameInput.value);
}

function topic1(event){

  pantalla2.classList.toggle('mostrar');
  pantalla3History.classList.toggle('mostrar');
}

function topic2(event){

  pantalla2.classList.toggle('mostrar');
  pantalla6Math.classList.toggle('mostrar');
}

function backPantalla(event){

  pantalla2.classList.toggle('mostrar');
  pantalla1.classList.toggle('mostrar');

  clearNameInput();
}


function backTopic1( event){

  pantalla3History.classList.toggle('mostrar');
  pantalla2.classList.toggle('mostrar');
}  

function backTopic2(event ){

  pantalla6Math.classList.toggle('mostrar');
  pantalla2.classList.toggle('mostrar');
}

function star( event ){

  pantalla9.classList.toggle('mostrar');
  pantalla1.classList.toggle('mostrar');

  clearNameInput();
} 

function keepPlaying( event ){

  pantalla9.classList.toggle('mostrar');
  pantalla2.classList.toggle('mostrar');
}


function clearNameInput(){
  nameInput.value = '';
  nameInput.focus();
}