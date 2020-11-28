
console.log("task-3-7-0.js begins");
let x = document.getElementById("in-x");
let y = document.getElementById("in-y");
let result = document.getElementById("result");
let form = document.getElementById("Calc_Percent");

console.log("About to addlistener");
form.addEventListener('submit', function(event) {
    console.log("Addevents begin");
    let x = x.value,
        y = y.value,
        answer;
    if (!x || !y) {
        alert("You must enter values for x and y");
        return;
    }
    console.log("x = " +  x +", y = " + y);
    answer = ( parseFloat(x) * 100 ) / parseFloat(y);
    answer.innerText = "Amount is " + answer + " percent of " + y;
    event.preventDefault();
});
