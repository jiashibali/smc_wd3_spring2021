const canvas = document.getElementById("myGame");
const ctx = canvas.getContext('2d');

let cWidth = canvas.width;
let cHeight = canvas.height;
let cPosX = cWidth/2; //horizontal center
let cPosY = cHeight/2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;

let randomColor = function(){
    let colValue = "blue"
    return colValue;
}

function drawFrame(){
    ctx.clearRect(0, 0, cWidth, cHeight);

    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0){
        cVelX = cVelX * -1; //reverse the horizontal direction
    }

    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0){
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; //
    cPosY = cPosY + cVelY;

    window.requestAnimationFrame(drawFrame);
}

drawFrame();


function drawScore() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.font = '50px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('' + score, 400, 300);
    ctx.closePath();

    window.requestAnimationFrame(drawScore);
}

drawScore();

var score = 0;

var count = (function(){
    var counter = 0;
    return function () {return counter += 1;}
})();
function myGame(){
    document.getElementById("score").innerHTML = count();
}

function addScore(){
    score++;
    document.getElementById("score").innerHTML = score;
}

canvas.addEventListener("click", function(event){
    //console.log(event);
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);
    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRadius && distY < cRadius){
        console.log("HIT!!!");
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
        addScore();
    }
})


