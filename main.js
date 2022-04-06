canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car2_width = 120;
car2_height = 70;

car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";

car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;

function add() {

    car1_img_tag = new Image();
    car1_img_tag.onload = upload_car1;
    car1_img_tag.src = car1_image;

    car2_img_tag = new Image();
    car2_img_tag.onload = upload_car2;
    car2_img_tag.src = car2_image;
}

function upload_car1() {
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2() {
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        car1_up();
        console.log("Car1 up");
    }
    if(keypressed == '40'){
        car1_down();
        console.log("Car1 down");
    }
    if(keypressed == '37'){
        car1_left();
        console.log("Car1 left");
    }
    if(keypressed == '39'){
        car1_right();
        console.log("Car1 right");
    }
    if(keypressed == '65'){
        car2_up();
        console.log("Car2 up A");
    }
    if(keypressed == '83'){
        car2_down();
        console.log("Car2 down S");
    }
    if(keypressed == '90'){
        car2_left();
        console.log("Car2 left Z");
    }
    if(keypressed == '88'){
        car2_right();
        console.log("Car2 right X");
    }
}