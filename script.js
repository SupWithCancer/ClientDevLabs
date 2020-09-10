'use strict'

let textBox = document.getElementById('showTextBox');
let sendedText = document.getElementById('sendedText');
let send = document.getElementById('ok');
showTextBox.style.display = 'none';

const showText = function() {
    showTextBox.style.display = 'block';
    let userText = document.getElementById('userText').value;
    document.getElementById('userText').value = '';
    sendedText.innerHTML = userText;
}

send.addEventListener('click', showText);