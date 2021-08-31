var canvas = new fabric.Canvas('myCanvas');
 width = 30;
 height = 30;
var x = 10;
var y = 10;
var object = "";
function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    object = Img;
    object.scaletowidth(150);
    object.scaletoheight(140);
    object.set({
    top: y,
    left: x
    });
    canvas.add(object);
});
}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
object = Img;
object.scaletowidth(width);
object.scaletoheight(height);
object.set({
    top: y,
    left: x,
});
canvas.add(block_image_object);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keycode
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80')
    {
    console.log("p and pressed together");
    width=width + 10;
    height = height + 10;
    document.getElementById("current_width").innerHTML = width;
    document.getElementById("current_height").innerHTML = height;

    }
    if(e.shiftkey && keyPressed == '77'){
        console.log("m and pressed together");
    width= width - 10;
    height = height - 10;
    document.getElementById("current_width").innerHTML = width;
    document.getElementById("current_height").innerHTML = height;

    }
    if(keyPressed == '38'){
        up();
        console.log("up");
        
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
        
    }
    if(keyPressed == '37'){
        left();
        console.log("left");

        
    }

    if(keyPressed == '39'){
        right( );
        console.log("right");
        
    }
    if(keyPressed == '87'){
        new_image('wall.jpg');
        console.log("w");
        
    }
    if(keyPressed == '71'){
        new_image("ground.png");
        console.log("g");
        
    }
    if(keyPressed == '76'){
        new_image("light_green.png");
        console.log("l");
        
    }
    if(keyPressed == '84'){
        new_image("trunk.jpg");
        console.log("t");
        
    }
    if(keyPressed == '82'){
        new_image("roof.jpg");
        console.log("r");
        
    }
    if(keyPressed == '89'){
        new_image("yellow_wall.png");
        console.log("y");
        
    }
    if(keyPressed == '68'){
        new_image("dark_green.png");
        console.log("d");
        
    }
    if(keyPressed == '85'){
        new_image("unique.png");
        console.log("u");
        
    }
    if(keyPressed == '67'){
        new_image("cloud.jpg");
        console.log("c");
        
    }
}
    function up(){
        if(player_y >= 0){
        player_y = player_y - height;
        console.log("Block Image Height = " + height);
        console.log("When up arrow key is pressed, X = " + player_x  +", Y = " + player_y);
        canvas.remove(object);
        player_update();
        }
    }
    function down(){
        if(player_y <= 500){
            player_y = player_y + height;
            console.log("Block Image Height = " + height);
            console.log("When the down arrow key is pressed, X =" + player_x+ ", Y = " + player_y);
            canvas.remove(object);
            player_update();
        }
    }
    function left(){
        if(player_x >= 0){
            player_x = player_x - width;
            console.log("Block Image Width = " + width);
            console.log("When the left arrow key is pressed, X = " + player_x+ " , Y = " + player_y);
            canvas.remove(object);
            player_update();
        }
    
    }
    function right(){
        if(player_x <= 850){
            player_x = player_x + width;
            console.log("Block Image Width = " + width);
            console.log("When the right arrow key is pressed, X =" + player_x + ", Y = " + player_y);
            canvas.remove(oject);
            player_update();
        }
    }