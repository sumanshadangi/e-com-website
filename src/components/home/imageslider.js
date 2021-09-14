function waitForLoad(id, callback){
    var timer = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(timer);
            callback();
        }
    }, 100);
}
waitForLoad("sl-box", function(){
    var slide = document.getElementById("slider");
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');

    btn1.onclick = function () {
        slide.style.transform = "translateX(0px)";
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
       
    };
    btn2.onclick = function () {
        slide.style.transform = "translateX(-90%)";
        btn1.classList.remove('active');
        btn2.classList.add('active');
        btn3.classList.remove('active');
       
    };
    btn3.onclick = function () {
        slide.style.transform = "translateX(-175%)";
        btn1.classList.remove('active');
        btn2.classList.remove('active');
        btn3.classList.add('active');
      
    };
});


waitForLoad("blue_strip", function(){
    var bluebutton = document.getElementById('bluebutton');
    bluebutton.onclick = function () {
        document.getElementById('blue_strip').style.transform = "translateX(-95%)";
    };
    var close=document.getElementById('close');
    close.onclick = function () {
        document.getElementById('blue_strip').style.transform = "translateX(-3%)";
    };
});