const add = document.getElementById('increase');
const minus = document.getElementById('decrease');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter')

let count = 0;

add.onclick = function() {
    count++;
    counter.textContent = count;
}

minus.onclick = function() {
    count--;
    counter.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}

