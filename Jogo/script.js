let playerx = 320, playery = 240;
let xprojecao = Math.random()*800, yprojecao = 0;
let level = 1;
let direction = 1;
let directionFlag = true;
let movXRandom = (Math.random() - 0.5);
let i = 0;
let naveInimiga = {
	source: "sprites/naveInimiga"+level+".png",
	x: 0,
	y: 0,
	width: 80,
	height: 80
}

$(document).ready(function() {
	$("canvas").css("cursor", "none");
	$("canvas").on("mousemove", function(event) {
		playerx = event.pageX - ($("body").width() - $("canvas").width())/2;
		playery = event.pageY;
	});

	setInterval(gameLoop, 15);
	setInterval(timer, 1000);
	setInterval(resetEnemies, 7000);
	
});

let texto = "Tempo de jogo - 00:00";
let minutos = "";
let segundos = "";
let tempoDeSessao = 0;

function timer() {
	tempoDeSessao++;
	minutos = parseInt(tempoDeSessao / 60);
	minutos =  minutos < 10 ? "0" + minutos : minutos;
	segundos = (tempoDeSessao % 60) < 10 ? "0" + tempoDeSessao % 60 : tempoDeSessao % 60;
	texto = "Tempo de jogo - " + minutos + ":" + segundos;
}

// Reseta naves inimigas
function resetEnemies(){
	xprojecao = Math.random()*800;
	yprojecao = 0;
	directionFlag = true;
}

// Renderiza as naves inimigas
function enemyWave(){
	waveSize = 5
	if(level === 4){
		$("canvas").drawImage(naveInimiga);
			naveInimiga.x -= 40;
	}
	else{
		for(i = 0; i < waveSize; i++){
			naveInimiga.x -= 50*direction;
			naveInimiga.y -= 50;
			$("canvas").drawImage(naveInimiga);
		}
	}
}

// Renderiza todo canvas
function renderScene() {

	// Limpa tela
	$("canvas").clearCanvas(); 

	$("canvas").drawRect({
		fillStyle: "#000",
		x: 400,
		y: 300,
		width: 800,
		height: 600
	});

	// Desenha o plano de fundo
	$("canvas").drawImage({
		source: 'paginaBG2.jpg',
		x: 400,
		y: 300,
		width: $("canvas").width(),
		height: $("canvas").height()
	});

	// Desenha o personagem principal
	$("canvas").drawImage({
		source: 'sprites/naveMC.png',
		x: playerx,
		y: playery,
		width: 80,
		height: 80
	});

	// Chama função que renderiza a onda inimiga
	enemyWave();

	// Renderiza a contagem de tempo
	$("canvas").drawText({
		fillStyle: "#FFF",
		x: ($("canvas").width()/2), 
		y: 20,
		fontSize: 20,
		fontFamily: 'Arial',
		text: texto
	});
	
}

// Atuliza os atributos
function updateGame(){
	switch(level){
		case(1):
			naveInimiga = {
				source: "sprites/naveInimiga"+level+".png",
				x: xprojecao,
				y: yprojecao,
				width: 80,
				height: 80
			}
			if(directionFlag){
				direction = enemyDirection(naveInimiga.x, naveInimiga.y);
				directionFlag = false;
			}
			xprojecao += 1.8*direction;
			yprojecao += 1.8;
			break;
		case(2):
			naveInimiga = {
				source: "sprites/naveInimiga"+level+".png",
				x: xprojecao,
				y: yprojecao,
				width: 80,
				height: 80
			}
			if(directionFlag){
				direction = enemyDirection(naveInimiga.x, naveInimiga.y);
				directionFlag = false;
			}
			xprojecao += 2.4*direction;
			yprojecao += 2.4;
			break;
		case(3):
			naveInimiga = {
				source: "sprites/naveInimiga"+level+".png",
				x: xprojecao,
				y: yprojecao,
				width: 80,
				height: 80
			}
			if(directionFlag){
				direction = enemyDirection(naveInimiga.x, naveInimiga.y);
				directionFlag = false;
			}
			xprojecao += 3*direction;
			yprojecao += 3;
			break;
		case(4):
			naveInimiga = {
				source: "sprites/naveInimiga"+level+".png",
				x: 400,
				y: 100,
				width: 360,
				height: 360
			}
			xprojecao += movXRandom * 3.5;
	}
}

function enemyDirection(x,y){
	if((x > 400) && (y < 10)){
		return -1;
	}else{
		return 1;
	}
}

function gameLoop(){
	updateGame();
	renderScene();
}