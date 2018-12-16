var preguntas = [											
    {id: 1, answer: "rick astley"},
    {id: 2, answer: "dire straits"}, 
    {id: 3, answer: "robbie williams"},
    {id: 4, answer: "the monkees"},
    {id: 5, answer: "backstreet boys"},
    {id: 6, answer: "rem"},
    {id: 7, answer: "bananarama"},
    {id: 8, answer: "the spice girls"}, 
    {id: 9, answer: "culture club"},
    {id: 10, answer: "abba"},
    {id: 11, answer: "the pogues"},
    {id: 12, answer: "morrissey"},
    {id: 13, answer: "the sex pistols"},
    {id: 14, answer: "all saints"}, 
    {id: 15, answer: "the police"},
    {id: 16, answer: "ac/dc"},
    {id: 17, answer: "the bangles"},
    {id: 18, answer: "the corrs"},
    {id: 19, answer: "mariah carey"},
    {id: 20, answer: "nickelback"}, 
    {id: 21, answer: "christina aguilera"},
    {id: 22, answer: "mc hammer"},
    {id: 23, answer: "madness"},
    {id: 24, answer: "iggy pop"},
    {id: 25, answer: "the bee gees"},
    {id: 26, answer: "simon and garfunkel"}, 
    {id: 27, answer: "zz top"},
    {id: 28, answer: "the osbournes"},
    {id: 29, answer: "the supremes"},
    {id: 30, answer: "simple minds"},
    {id: 31, answer: "prince"}, 
    {id: 32, answer: "marilyn manson"},
    {id: 33, answer: "alanis morrisette"},
    {id: 34, answer: "sigue sigue sputnik"},
    {id: 35, answer: "kiss"},
    {id: 36, answer: "meatloaf"},
    {id: 37, answer: "tina turner"}, 
    {id: 38, answer: "guns n' roses"},
    {id: 39, answer: "mel and kim"},
    {id: 40, answer: "the jackson five"},
    {id: 41, answer: "boney m"},
    {id: 42, answer: "tatu"},
    {id: 43, answer: "hanson"},
    {id: 44, answer: "barry white"},
    {id: 45, answer: "shakira"}, 
    {id: 46, answer: "village people"},
    {id: 47, answer: "queen"},
    {id: 48, answer: "boyzone"},
    {id: 49, answer: "the beatles"},
    {id: 50, answer: "eminem"}
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
