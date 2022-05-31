// Testing GSAP timeScale etc.
gsap.set(".character",{x:-500});
var anim = gsap.to(".character", {x:800, duration:6, paused:true, repeat:-1});

gsap.set(".characterDest", {x:100});
var destination = gsap.to(".characterDest", {x:600, duration:1.5, rotate:405, paused:true});

var playBtn=document.querySelector("#play");
var pauseBtn=document.querySelector("#pause");
var reverseBtn=document.querySelector("#reverse");
var restartBtn=document.querySelector("#restart");
var slowDownBtn=document.querySelector("#slowDown");
var speedUpBtn=document.querySelector("#speedUp");

playBtn.onclick = function(){ anim.play()};
pauseBtn.onclick = function(){ anim.pause()};
reverseBtn.onclick = function(){ anim.reverse()};
restartBtn.onclick = function(){ anim.restart()};
slowDownBtn.onclick = function(){ anim.play(), anim.timeScale(0.1)};
speedUpBtn.onclick = function(){ anim.play(), anim.timeScale(2)};

function celebrate() {
    var P1=document.querySelector("#p1");
    if(anim.x == destination.x) {
        P1.innerHTML="Great accuracy!";
    }
}