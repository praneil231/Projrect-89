
var canvas=new fabric.Canvas('mycanvas');

ball_x=0
ball_y=0
holl_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img()
{
	
	fabric.util.loadImage('golf-h.png',function(img){
	hole_obj=img;

	hole_obj.scaleToWidth(50);
	hole_obj.scaleToheight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
}) ;

	new_image();
}

function new_image()
{
	fabric.util.loadImage('ball.png',function(img){
		ball_obj=img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToheight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	}) ;
	
		
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==holl_y)){
	canvas.remove(ball_obj);	
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>5){

		
		// Write a code to move ball upward.
		     ball_y=ball_y+block_image_height;
			 console.log("bloke image height="+block_image_height);
			 console.log("When up arrow key is pressed,X="+ball_x+",Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function down()
	{
		 if(ball_y<=450)
		 {
			 
			 ball_y=ball_y+block_image_height;
			 console.log("bloke image height="+block_image_height);
			 console.log("When Down arrow key is pressed,X="+ball_x+",Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x=ball_x-block_image_width;
			 console.log("bloke image width="+block_image_width);
			 console.log("When left arrow key is pressed,X="+ball_x+",Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x=ball_x+block_image_width;
			 console.log("bloke image width="+block_image_width);
			 console.log("When right arrow key is pressed,X="+ball_x+",Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}
	
}

