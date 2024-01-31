// let qrCreateBtn = document.querySelector('#btn');
let inputBox = document.querySelector('#input-box');
const qrContainer = document.querySelector('#qrContainer');
let qrCode = document.createElement('img');


function generateQRCode(){

    if(inputBox.value.length > 0){
        qrCode.remove();
        qrContainer.className = 'qrCode';
        qrCode.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputBox.value;
        qrContainer.appendChild(qrCode);
        inputBox.value = '';
    }
    else{
        qrCode.remove();
        inputBox.classList.add('error');
        setTimeout(()=>{
            inputBox.classList.remove = 'error';
        },1000);

    }
}