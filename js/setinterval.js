// let count = 0;
// let time = 20;
// paused = false;
// counter = function(){
//     count++;
//     if (count > 20){
//         count = 1
//     }
//     timer = setTimeout(function(){
//         counter();
//     }, 1000);
// };
// counter();

var startbutton = document.getElementById("start");
var pausebutton = document.getElementById("pause");
var restartbutton = document.getElementById("restart");

var title = document.getElementById("title");
var time = 0;
var myInterval = -1;

    startbutton.addEventListener('click', function(event){

       // if timer is paused, start the timer
       if (myInterval == -1){
        myInterval = setInterval(function(){
            time ++;
            title.innerHTML = `<aside>Time Passed: 00:0`+time+`
            </aside>
            `;
        }, 1000);
    }
        
});

    pausebutton.addEventListener('click', function(event){
        clearInterval(myInterval);
        myInterval = -1;
    });

    restartbutton.addEventListener('click', function(event){
        clearInterval(myInterval);
        time = 0;
        myInterval = setInterval(function(){
            time ++;
            title.innerHTML = `<aside>Time Passed: 00:0`+time+`
            </aside>
            `;
        }, 1000);

    });




