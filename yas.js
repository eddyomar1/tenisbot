var a = document.getElementById('a');
var p = document.getElementById('b');
var po = document.getElementById('po');
var pt = document.getElementById('pt');

var mo = document.getElementById('mo');

var wp = window.innerWidth;//screen.width;
var hp = window.innerHeight;
// a.style.width = wp+"px";
// a.style.height = hp+"px";
// --------------------------------
var sc_p = 0;
var sc_b = 0;

var lv = 4;
var lvv = 300;

function init(){
var x = 0;
var y = 300;
var a = true;
var b = true;
var v = 0;


// wp = window.innerWidth;
// hp = window.innerHeight;

// jugador
var pon = {x: 0, y: 200, m: ''};

// bot
var pc = {x: wp-30, y: 200};



// x = 0;
// y = 300;
// a = true;
// b = true;
// v = 0;
// pon = {x: 0, y: 200, m: ''};
// pc = {x: wp-30, y: 200};


function GW(){clearInterval(pee);sc_p++; mo.innerHTML = sc_p + "  |  "+ sc_b + "<br><br>GANASTE!!! :)";if(lv>1){lv--}; setTimeout(()=>{init();mo.innerHTML = "";},5000)}
function GV(){clearInterval(pee);sc_b++; mo.innerHTML = sc_p + "  |  "+ sc_b + "<br><br>perdiste :(";  setTimeout(()=>{init();mo.innerHTML = ""}, 5000)}



function pe(){

  wp = window.innerWidth;
  hp = window.innerHeight;

  pc.x = wp-30;

  pt.style.left = pc.x + "px";

  if(a){
    p.style.left = x + 'px';
    x += (v%2==0)?1:2;1.5;

    }

    if(!a){
    p.style.left = x + 'px';
    x -= (v%2==0)?2.5:(v%12==0)?5:2.8;

    }

    if(b){
    p.style.top = y + 'px';
    po.style.top = pon.y + 'px';
    pt.style.top = pc.y + 'px'; 
    
    y += (v%2==0)?1.2:1;

    }

    if(!b){
    
    p.style.top = y + 'px';
    po.style.top = pon.y + 'px';
    pt.style.top = pc.y + 'px';
    y -= (v%2==0)?1:(v%10==0)?5:1.2;

    }

    // logica de la pelota al tocar el lado del jugador
    if(x <= pon.x + 20 && y > pon.y-20  && y < pon.y+100){a = true; 
    let z = Math.floor(Math.random() * 11); v=z;
    if(z % 2 == 0){b = false}}

    // if(x <= pon.x + 20 && y > pon.y  && y < pon.y+50){a = true; b = false}
    // if(x <= pon.x + 20 && y > pon.y+51 && y < pon.y+100){a = true; b = true}

    // logica de la pelota al tocar el lado del bot
    if(x >= pc.x - 20 && y > pc.y-30 && y < pc.y+100){a = false; 
    let z = Math.floor(Math.random() * 11); v=z;
    if(z % 2 == 0){b = false}}

if(x+30 >= wp-3){GW()}

if(x <= 0){GV()}

// GV()

if(y+30 >= hp){b = false}

if(y <= 0){b = true}

}


var move = setInterval(() => {  
if(pon.m == 'u' && pon.y < hp-100){pon.y++;}
if(pon.m == 'd' && pon.y > 0){pon.y--;} 
}, 1);

document.addEventListener('keydown', function(event) {
  
if(event.keyCode === 40){

pon.m = 'u';
}

if(event.keyCode === 38){

pon.m = 'd';
}

});


document.addEventListener('keyup', function(event) {
  
  if(event.keyCode === 40){
  
  pon.m = '';
  }
  
  if(event.keyCode === 38){
  
  pon.m = '';

  }
  
  });

// function du(){pon.m = 'u';}
// function dd(){pon.m = 'd';}

// function ff(){pon.m = '';}

  
  // bot
if(sc_p == 5){lvv = 250}
if(sc_p == 6){lvv = 240}
if(sc_p == 7){lvv = 220}
if(sc_p == 8){lvv = 200}
if(sc_p == 9){lvv = 150}
if(sc_p > 10){lvv = 10}

setInterval(() => {

if(x > lvv &&  a){
 if(pc.y+60 < y){pc.y++}
 if(pc.y-20 > y){pc.y--}
}
}, lv);

var pee = setInterval(pe, 1);

// para hacer los niveles de dificultad voy a añadir mas velocidad a la pelota cada cierto tiempo

setTimeout(() => {if(sc_p > 9 || sc_b > 9){location.reload()}

}, 10);


var pr = document.getElementById('u');
var pb = document.getElementById('d');

pr.addEventListener('touchstart', function(event) {
  pon.m = 'u';  
  });

  pb.addEventListener('touchstart', function(event) {
  pon.m = 'd';  
  });

  pb.addEventListener('touchend', function(event) {
  pon.m = '';  
  });

  pr.addEventListener('touchend', function(event) {
  pon.m = '';  
  });


}

// movil




init();


