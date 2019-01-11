var preguntas = [											
    {id: 1, answer: "rosalia"},
    {id: 2, answer: "c tangana"}, 
    {id: 3, answer: "yung beef"},
    {id: 4, answer: "bad gyal"},
    {id: 5, answer: "becky g"},
    {id: 6, answer: "brisa fenoy"},
    {id: 7, answer: "bejo"},
    {id: 8, answer: "elton john"}, 
    {id: 9, answer: "elvis presley"},
    {id: 10, answer: "michael jackson"},
    {id: 11, answer: "bob marley"},
    {id: 12, answer: "jimi hendrix"},
    {id: 13, answer: "ray charles"}, 
    {id: 14, answer: "loquillo"},
    {id: 15, answer: "gorillaz"}
]

document.getElementById('resolucion').innerHTML = "score<br>0/50<br>";
document.getElementById('boton').innerHTML = "CHECK";


acertadas = 0;
index = 0;
i = 0;

var estado= [];
var pregunta = preguntas[index].id;
var respuesta = preguntas[index].answer;

hazPregunta();

document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById('dato').value.toLowerCase();
    if (entrada == respuesta){
        acertadas ++;
        document.getElementById('resolucion').innerHTML = "score<br>" + acertadas + "/50<br>";
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
    if(index == preguntas.length){
        document.getElementById('boton-next').style.display='hidden';
    } else {
        hazPregunta();
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
    if(index == 1){
        document.getElementById('boton-prev').style.display='hidden';
    } else {
        hazPreguntaAnt();
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
        document.getElementById('boton').style.backgroundColor = '#6843FF';
        document.getElementById('boton').disabled = false;   
    }
};
