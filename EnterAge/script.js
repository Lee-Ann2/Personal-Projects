const myText = document.getElementById('myText');
const btn = document.getElementById('btn');
let age; // always use let if a var will change 

btn.onclick = function() {
    age = myText.value; // Always accept value when using input.
    age = Number(age); // convert a string to a number
    if(age < 18) {
        alert('Get the hell outta here lil hommie');
    } else if(age == 18) {
        alert('Yeah, you can get in big dawg');
    } else {
        alert('Yeah, you can get in big dawg');
    }
}