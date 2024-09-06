const myText = document.getElementById('myText');
const btn = document.getElementById('btn');
let age;

btn.onclick = function() {
    age = myText.value;
    age = Number(age);
    if(age < 18) {
        alert('Get the hell outta here lil hommie');
    } else if(age == 18) {
        alert('Yeah, you can get in big dawg');
    } else {
        alert('Yeah, you can get in big dawg');
    }
}