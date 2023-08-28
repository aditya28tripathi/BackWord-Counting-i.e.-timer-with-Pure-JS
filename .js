var timer = 60; //Global
function runTimmer(){
    var timergame = setInterval(function(){
        if(timer>0) {
            timer--;
            document.querySelector("#timerval").textContent=timer;
                }

        else{
            clearInterval(timergame);
        }        
    },1000);
}
