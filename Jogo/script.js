let playerx = 320, playery = 240;
let xprojecao = 0, yprojecao = 0;
let level = 1;
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
	setInterval(resetEnemies, 7000);
	
});

function resetEnemies(){
	xprojecao = 0;
	yprojecao = 0;
}

function enemyWave(){
	waveSize = 5
	if(level === 4){
		$("canvas").drawImage(naveInimiga);
			naveInimiga.x -= 40;
	}
	else{
		for(i = 0; i < waveSize; i++){
			naveInimiga.x -= 40;
			naveInimiga.y -= 40;
			$("canvas").drawImage(naveInimiga);
		}
	}
}

function renderScene() {

	$("canvas").clearCanvas();

	$("canvas").drawRect({
		fillStyle: "#000",
		x: 400,
		y: 300,
		width: 800,
		height: 600
	});

	$("canvas").drawImage({
		source: 'sprites/naveMC.png',
		x: playerx,
		y: playery,
		width: 80,
		height: 80
	});

	enemyWave();
}

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
			xprojecao += 1.8;
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
			xprojecao += 2.4;
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
			xprojecao += 3;
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

function gameLoop(){
	updateGame();
	renderScene();
}