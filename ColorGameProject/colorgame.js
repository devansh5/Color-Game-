var numsquares=10;
var colors=generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.getElementById("colordisplay");
var messageDispplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
// var easybtn=document.querySelector("#easybtn");
// var hardbtn=document.querySelector("#hardbtn");
var modebutton=document.querySelectorAll(".mode");
colorDisplay.textContent = pickedcolor;

for(var i=0;i<modebutton.length;i++){
    modebutton[i].addEventListener("click",function(){
        modebutton[0].classList.remove("selected");
        modebutton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy"? numsquares = 3:numsquares = 6;
        // if(this.textContent==="Easy"){
        //     numsquares=3;
        // }else{
        //     numsquares=6;
        // }
        reset();


    });


}

// this function is used at steps where redundancy is occuring
function reset(){
    colors=generaterandomcolors(numsquares);
    // pick new random color from array
    pickedcolor=pickcolor();

    messageDispplay.textContent = "";   
    // change colordissplay to match picked color
    colorDisplay.textContent=pickedcolor;
    resetButton.textcontent="New Colors";
    // change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        } else{
            squares[i].style.display="none";
        }
        
    }
    h1.style.backgroundColor="steelblue";
}

// easybtn.addEventListener("click",function(){
//     hardbtn.classList.remove("selected")
//     easybtn.classList.add("selected");
//     numsquares=3;
//     colors=generaterandomcolors(numsquares);
//     pickedcolor=pickcolor();
//     colorDisplay.textContent=pickedcolor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//         }else{
//             squares[i].style.display="none";
//         }
//     }
// });
// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected")
//     easybtn.classList.remove("selected");
//     numsquares=6;
//     colors=generaterandomcolors(numsquares);
//     pickedcolor=pickcolor();
//     colorDisplay.textContent=pickedcolor;
//     for(var i=0; i<squares.length;i++){
//         squares[i].style.backgroundColor=colors[i];
//         squares[i].style.display="block";
//     }
// });

resetButton.addEventListener("click",function(){
    // generate all new colors
    numsquares=6;
    colors=generaterandomcolors(numsquares);
    // pick new random color from array
    pickedcolor=pickcolor();

    messageDispplay.textContent = "";   
    // change colordissplay to match picked color
    this.textContent="New Colors";
    colorDisplay.textContent=pickedcolor;
    // change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
})


for(var i=0 ; i<squares.length ; i++){
    // Add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    // add Click listeners to squares
    squares[i].addEventListener("click",function(){
        // grab color at clicked Square
        var clickedcolor=this.style.backgroundColor;
        if(clickedcolor===pickedcolor){
            messageDispplay.textContent="Correct!";
            resetButton.textContent="Play Again?";
            h1.style.backgroundColor=clickedcolor;
            changeColors(clickedcolor);
        }else{
            this.style.backgroundColor="#232323";
            messageDispplay.textContent="Try Again";
        }
        // compare color to pickedColor
    });
}
function changeColors(color){
    for(var i=0;i<colors.length;i++){
        // change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];

}
function generaterandomcolors(num){
    // make an array
    var arr=[];
    // add num random colors to an array
    for(var i=0;i<num;i++){
        // get random color and push into array
        arr.push(randomcolor())
    }
    // return that array
    return arr;
}
function randomcolor(){
    // Pick a "red"  from 0-255
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    // pick a "green" from 0-255
    // pick a "blue" from 0-255
}

