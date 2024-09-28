var canvas;
var bgImg, car1_img, car2_img,track;
var fuelImage, backgroundImage ,lifeImage ,powerCoinImage;
var boom_img, fuels, powerCoins, obstacles;
var obstacle1Image, obstacle2Image;
var fireAuth, database;
var game, welcome, teacher, student;
var secret_word;
var player, playerCount, allPlayers;
var gameState= null;

function preload() {
    backgroundImage = loadImage("./assets/background.png");
    car1_img = loadImage("../assets/car1.png");
    car2_img = loadImage("../assets/car2.png");
    boom_img = loadImage("../assets/blast.png")
    lifeImage = loadImage("../assets/life.png");
    track = loadImage("../assets/track.jpg");
    fuelImage = loadImage("./assets/fuel.png");
    powerCoinImage = loadImage("./assets/goldCoin.png");
    obstacle1Image = loadImage("./assets/obstacle1.png");
    obstacle2Image = loadImage("./assets/obstacle2.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    //canvas = createCanvas(displayWidth, displayHeight);
    fireAuth = firebase.auth();
    database = firebase.database();
    game = new Game();

    welcome = new Welcome();
    teacher = new Teacher();
    student = new Student();
    player = new Player()

    //

    /*game.getState();
    game.start();*/

    car1 = createSprite(width / 2, 200);
    car1.addImage("car1", car1_img);
    car1.addAnimation("blast", boom_img, boom_img)

    car2 = createSprite(width / 2, 200);
    car2.addImage("car2", car2_img);
    car2.addAnimation("blast", boom_img, boom_img)

    cars = [car1,car2];

    fuels = new Group();
    powerCoins = new Group();
    obstacles = new Group();

    addSprites(fuels, 4, fuelImage, 0.02);

    addSprites(powerCoins, 18, powerCoinImage, 0.09)

    var obstaclesPositions = [
        { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
        { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
        { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
        { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
        { x: width / 2, y: height - 2800, image: obstacle2Image },
        { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
        { x: width / 2 + 180, y: height - 3300, image: obstacle2Image}
    ];


    addSprites(
        obstacles,
        obstaclesPositions.length,
        obstacle1Image,
        0.04,
        obstaclesPositions
    );
}

function draw(){
    background(backgroundImage);
    if(gameState === null || gameState === 0){
        game.start();
    }

    if(playerCount == 2){
        game.update(1);
    }

    if(gameState == 1){
        student.greeting.hide();
        student.greeting2.hide();
        student.playButton.hide();

        teacher.greeting.hide();
        teacher.greeting2.hide();
        teacher.playButton.hide();
        teacher.secretWord.hide();

        game.play();
    }

    if(gameState === 2){
        //game.showLeaderboard();123456789
        game.end();
    }
}

function addSprites(spriteGroup,numberOfSprites,spirteImage,scale,positions = []) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;
  
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spirteImage = positions[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }
      var spirte = createSprite(x, y);
      spirte.addImage("spirte", spirteImage);
      
  spirte.scale = scale;
      spriteGroup.add(spirte);
    }
  }

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}



// C42... to be continue...