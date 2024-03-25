
let toastBox = document.getElementById('toastBox');
let successMsg = '<img src="icons/checked.png" alt="" class="icon">Successfully submitted';
let errorMsg = '<img src="icons/remove.png" alt="" class="icon">Please fix the error!';
let invalidMsg = '<img src="icons/warning.png" alt="" class="icon">Invalid input, check again';



function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    // if(msg.includes('Success')){
    //     toast.classList.add('success');
    // }
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(() => {
        toast.remove();
    },5155);

}