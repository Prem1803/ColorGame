var numsquares=6;
var colors=[];
var pickedcolor;
var displaycolor=document.querySelector("#pickedcolor");
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");
init();

function init(){
    setUpModeListeners();
    setUpSquares();
    resetcolors();
}
//function for event linstener to squares
function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        //adding initial colors to the squares
        squares[i].style.background=colors[i];
        //adding event listeners
        squares[i].addEventListener("click",function(){
           
            var clickedcolor=this.style.background;
            if(clickedcolor==pickedcolor)
            {   changecolor(clickedcolor);
                reset.textContent="Play Again?";
                message.textContent="Correct!";
            }
            else{
                message.textContent="Try Again";
            this.style.background="#232323";
           }
        });
    }
}
//Event listener for reset button
reset.addEventListener("click",function(){
    resetcolors();
    });
//function for setting modes
function setUpModeListeners(){
    for(var i=0;i<modebuttons.length;i++){
        modebuttons[i].addEventListener("click",function(){
            for(var j=0;j<modebuttons.length;j++){
                modebuttons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            if(this.textContent==="Easy")
            numsquares=3;
            else
            numsquares=6;
            resetcolors();
        });
        }
}
//functions for generating Array of random colors
function randomcolor(){
    var r= Math.floor( Math.random()*256);
    var g= Math.floor( Math.random()*256);
    var b= Math.floor( Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
function randomcolorgenerator(num){
    var arr=[];
    for(var i=0;i<num;i++){
    arr.push(randomcolor());}
    return arr;
}
//Color picker 
function pickcolor(){
    return Math.floor( Math.random()*colors.length);
}
//changing color of squares and h1 after choosing the correct color
function changecolor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
    h1.style.background=color;
}
//reset function
function resetcolors(){
    reset.textContent="New Colors";
    colors=randomcolorgenerator(numsquares);
    pickedcolor=colors[pickcolor()];
    displaycolor.textContent=pickedcolor;
    h1.style.background="steelblue";
    message.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.background=colors[i];
        }
        else{
        squares[i].style.display="none";
        }
    }
}

