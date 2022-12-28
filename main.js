canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_heigth = 100;

greencar_x = 5;
greencar_y = 225;

function  add() {
    background_imgTag = new Image();
    background_imgTag.onlod = uploadBackground;
    background_imgTag.src = background_image;
    
    background_imgTag = new Image();
    background_imgTag = uploadBackground;
    background_imgTag.src = background_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_heigth)

}

function
{
    if(greencar_y >=0)
    {
        greencar_y = greencar_y = 10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y );
         uploadBackground();
         uploadgreencar();
    }

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }

}