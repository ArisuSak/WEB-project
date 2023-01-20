/* by Sovannsak Yours */

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById(".color");

btn.addEventListener('click', function() {
    console.log(document.body);
    //get random number at the index 2 of the array
    const randomnumber = getFunctionNumber();
    console.log(randomnumber);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});

function getFunctionNumber() {
    //use math.floor to round up the number cuz math random generate random number like 0.35525252,1.4141124;
    return Math.floor(Math.random() * colors.length);
}