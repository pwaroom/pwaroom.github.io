var preguntas = [											
    {id: 1, answer: "leonard cohen"},
    {id: 2, answer: "tom waits"}, 
    {id: 3, answer: "lou reed"},
    {id: 4, answer: "johny cash"},
    {id: 5, answer: "nick cave"},
    {id: 6, answer: "bob dylan"}
]

document.getElementById('resolucion').innerHTML = "score<br>0/6<br>";
document.getElementById('boton').innerHTML = "CHECK";


acertadas = 0;
index = 0;
i = 0;

var estado= [];
var pregunta = preguntas[index].id;
var respuesta = preguntas[index].answer;

console.log(pregunta);
console.log(respuesta);

hazPregunta();

document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById('dato').value.toLowerCase();
    if (entrada == respuesta){
        acertadas ++;
        document.getElementById('resolucion').innerHTML = "score<br>" + acertadas + "/100<br>";
        estado = preguntas[index-1].status=true;
    } else {
        document.getElementById('dato').value = '';
        document.getElementById('boton').innerHTML = "TRY AGAIN!";
        estado = preguntas[index-1].status=false;
    }
    check();
});

document.getElementById('boton-next').addEventListener('click', function(){
    check();
    if(index < preguntas.length){
        hazPregunta();
    } else {
        index = 0;
    }
});

function hazPregunta(){
    index++;
    if (index > preguntas.length){
        pregunta = 1;
    } else {
        pregunta = index;
    }
    estado = preguntas[index-1].status;
    document.getElementById('boton').innerHTML = "CHECK";
    check();
    respuesta = preguntas[index-1].answer;
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
};

document.getElementById('boton-prev').addEventListener('click', function(){
    check();
    if(index < preguntas.length){
        hazPreguntaAnt();
    } else {
        index = 0;
    }
});

function hazPreguntaAnt(){
    index--;
    if (index > preguntas.length){
        pregunta = 1;
    } else {
        pregunta = index;
    }
    estado = preguntas[index-1].status;
    document.getElementById('boton').innerHTML = "CHECK";
    check();
    respuesta = preguntas[index-1].answer;
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
};


function check(){
    if (estado == true){
        document.getElementById('dato').value = ":)";
        document.getElementById('dato').disabled = true;
        document.getElementById('boton').innerHTML = "CORRECT!";
        document.getElementById('boton').style.backgroundColor = '#05C400';
        document.getElementById('boton').disabled = true;
    } else {
        document.getElementById('dato').value = '';
        document.getElementById('dato').disabled = false;
        //document.getElementById('boton').innerHTML = "CHECK";
        document.getElementById('boton').style.backgroundColor = '#6843FF';
        document.getElementById('boton').disabled = false;   
    }
};


console.log(preguntas);


// V2-----------------------------------------------------------------------------------------------------------
/*
var preguntas = [											
    {id: 1, answer: "leonard cohen", status: ''},
    {id: 2, answer: "tom waits", status: false}, 
    {id: 3, answer: "lou reed", status: false},
    {id: 4, answer: "johny cash", status: false},
    {id: 5, answer: "nick cave", status: false},
    {id: 6, answer: "bob dylan", status: false}
]

document.getElementById('resolucion').innerHTML = "score<br>0";
document.getElementById('boton').innerHTML = "CHECK";


acertadas = 0;
index = 0;
i = 0;

var estado = preguntas[index].status;
var pregunta = preguntas[index].id;
var respuesta = preguntas[index].answer;

console.log(estado);
console.log(pregunta);
console.log(respuesta);

hazPregunta();

document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById('dato').value.toLowerCase();
    if (entrada == respuesta){
        acertadas ++;
        document.getElementById('resolucion').innerHTML = "score<br>" + acertadas;
        estado = true;
    } else {
        document.getElementById('dato').value = '';
        document.getElementById('boton').innerHTML = "TRY AGAIN!";
    }
    check();
});

document.getElementById('boton-next').addEventListener('click', function(){
    check();
    if(index < preguntas.length){
        hazPregunta();
    } else {
        index = 0;
    }
});

function hazPregunta(){
    index++;
    if (index > preguntas.length){
        pregunta = 1;
    } else {
        pregunta = index;
    }
    estado = preguntas[index-1].status;
    document.getElementById('boton').innerHTML = "CHECK";
    check();
    respuesta = preguntas[index-1].answer;
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
};

document.getElementById('boton-prev').addEventListener('click', function(){
    check();
    if(index < preguntas.length){
        hazPreguntaAnt();
    } else {
        index = 0;
    }
});

function hazPreguntaAnt(){
    index--;
    if (index > preguntas.length){
        pregunta = 1;
    } else {
        pregunta = index;
    }
    estado = preguntas[index-1].status;
    document.getElementById('boton').innerHTML = "CHECK";
    check();
    respuesta = preguntas[index-1].answer;
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
};


function check(){
    if (estado == true){
        document.getElementById('dato').value = respuesta;
        document.getElementById('dato').disabled = true;
        document.getElementById('boton').innerHTML = "CORRECT!";
        document.getElementById('boton').style.backgroundColor = 'green';
        document.getElementById('boton').disabled = true;
    } if (estado == false) {
        document.getElementById('dato').value = '';
        document.getElementById('dato').disabled = false;
        //document.getElementById('boton').innerHTML = "CHECK";
        document.getElementById('boton').style.backgroundColor = 'blue';
        document.getElementById('boton').disabled = false;
        
    }
};


console.log(preguntas);
*/








// V1-----------------------------------------------------------------------------------------------------------

/*
var preguntas = [											
    {id: 1, answer: "leonard cohen", status: false},
    {id: 2, answer: "tom waits", status: false}, 
    {id: 3, answer: "lou reed", status: false},
    {id: 4, answer: "johny cash", status: false},
    {id: 5, answer: "nick cave", status: false},
    {id: 6, answer: "bob dylan", status: false}
]

document.getElementById('resolucion').innerHTML = "score<br>0";
document.getElementById('boton').innerHTML = "CHECK";

acertadas = 0;
index = 0;
i=0;

var estado = preguntas[index].status;
var pregunta = preguntas[index].id;
var respuesta = preguntas[index].answer;

hazPregunta();

document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById('dato').value.toLowerCase();
    if (entrada == respuesta){
        acertadas ++;
        document.getElementById('resolucion').innerHTML = "score<br>" + acertadas;
        preguntas[index-1].status = true;
        isCorrect(index);  
    } else {
        isCorrect(estado);
    }
});

document.getElementById('boton-next').addEventListener('click', function(){
    if(index < preguntas.length){
        hazPregunta();
    } else {
        index = 0;
    }
});

document.getElementById('boton-prev').addEventListener('click', function(){
    if (index > 1){
        hazPreguntaAnt();
    } else {
        index = preguntas.length+1;
    }
});


function hazPregunta(){
    index++;
    if (index > preguntas.length){
        pregunta = 1;
    } else {
        pregunta = index;
    }
    respuesta = preguntas[index-1].answer;
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
    document.getElementById('dato').value = '';
};

function hazPreguntaAnt(){
    index--;
    if (index < 0){
        pregunta = preguntas.length;
    } else {
        pregunta = index;
    }
    respuesta = preguntas[index-1].answer;

    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";
    document.getElementById('dato').value = '';
};

function isCorrect(estado){
    if (estado == true){
    document.getElementById('boton').innerHTML = "CORRECT!";
    document.getElementById('boton').disabled = true;
    entrada = document.getElementById('dato').disabled = true;
    } if (estado == false) {
        entrada = document.getElementById('dato').value = "";
        document.getElementById('boton').innerHTML = "TRY AGAIN";
    }
};
*/
