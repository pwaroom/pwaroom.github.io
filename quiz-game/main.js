var preguntas = [											
        {id: 1, answer: "leonard cohen", status: false},
        {id: 2, answer: "tom waits", status: false}, 
        {id: 3, answer: "lou reed", status: false},
        {id: 4, answer: "johny cash", status: false},
        {id: 5, answer: "nick cave", status: false},
        {id: 6, answer: "bob dylan", status: false}
]

var pregunta;
var respuesta;
formuladas = 0,
acertadas = 0;
i=0;
 
hazPregunta();

document.getElementById('resolucion').innerHTML = "score<br>0";
document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById("dato").value.toLowerCase();
    if(entrada == respuesta){
        acertadas++;
        document.getElementById('resolucion').innerHTML = "score<br>" + acertadas;
        preguntas[i-1].status = true;
    }

});


function hazPregunta(){
    i++;
    if (i > 6){
        pregunta = 1;
    } else {
        pregunta = i;
    }
    respuesta = preguntas[i-1].answer;
        
    document.getElementById('preg').innerHTML = "<img src='img/" + pregunta + ".png'>";        
    document.getElementById('dato').value = '';                  
    formuladas++;
    document.getElementById('progreso').innerHTML = "remaining<br>" + (6 - formuladas);
};
