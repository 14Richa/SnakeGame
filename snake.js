var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var snakeW = 10;
var snakeH = 10;

function drawSnake( x , y) 
{
	ctx.fillStyle = "white";
	ctx.fillRect(x*snakeW , y*snakeH , snakeW , snakeH);
	ctx.fillStyle = "black" ; 
	ctx.strokeRect(x*snakeW , y*snakeH , snakeW , snakeH)
}

// creating a snake 

var len = 4;
snake = [];

// writing a loop


for(var  i = len - 1; i >= 0; i--){
	//print(i);
	snake.push({
		x: i ,
		y: 0
	})

}

// creating a food 

var food = {
	x: Math.round(Math.random()*(cvs.width/snakeW) + 1),
	y: Math.round(Math.random()*(cvs.height/snakeH) + 1)
}

                             //draw food 
function drawFood(x,y) {
	ctx.fillStyle = "red";
	ctx.fillRect(x*snakeW , y*snakeH , snakeW , snakeH)
	ctx.fillStyle = "black" ;
	ctx.strokeRect(x*snakeW , y*snakeH , snakeW , snakeH)
}


                           // control dir 



document.addEventListener("keydown" , dirControl)
var dir = "right";
function dirControl(e) 
{
	if (e.keyCode== 37) 
	{
		dir="left";
	}
	else if (e.keyCode== 38)
	{
		dir="up";
	}
	else if (e.keyCode== 39)
	{
		dir="right";
	}
	else if (e.keyCode== 40)
	{
		dir="down";
	}
}
 


                            
        // draw function

function draw() 
{
	
	ctx.clearRect(0,0,cvs.width,cvs.height);
    for( var i = 0; i < snake.length; i++)
    {
	  var X = snake[i].x;
	  var Y = snake[i].y;
	  drawSnake(X , Y)
    }

    drawFood(food.x , food.y);

                            
    //snake head 
    
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    
   if (dir == "right"){snakeX++; }
   else if(dir == "left"){snakeX--; }
   else if(dir == "up") {snakeY--; }
   else if(dir == "down") {snakeY++; }

	if( (snakeX == food.x) && (snakeY == food.y)) 
  	{
	  	food = 
	  	{
			x: Math.round(Math.random()*(cvs.width/snakeW) + 1),
			y: Math.round(Math.random()*(cvs.height/snakeH) + 1)
	    }
	    var newHead = 
	    {
			x: snakeX,
			y: snakeY
	    }
	}
	else 
	{ 
	  	snake.pop();
	  	var newHead = 
	  	{
		   x: snakeX ,
		   y: snakeY
	    }
  	}
	snake.unshift(newHead);
}


// end of draw function 
setInterval(draw , 100);




