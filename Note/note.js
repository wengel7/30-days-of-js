let createNoteBtn = document.querySelector('.btn');
let notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');


createNoteBtn.addEventListener('click', ()=>{
    let note = document.createElement('p');
    let removeIcon = document.createElement('img');
    
    note.className = 'input-box';
    note.setAttribute("contenteditable", "true");
     
    removeIcon.className = 'remove';
    removeIcon.src = '/Note/icons/icons8-remove-48.png';


    notesContainer.appendChild(note);
    note.appendChild(removeIcon);
    saveData();
});

notesContainer.addEventListener('click', (note) => {
    if(note.target.tagName == "IMG"){
        note.target.parentElement.remove();
        saveData();
    }
    else if(note.target.tagName == "P"){
        notes.forEach( nt => {
            nt.onkeyup = function(){
                saveData();
            }
        });
    }
});

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

function saveData(){
    localStorage.setItem("nt", notesContainer.innerHTML);
 }
 
 function showTask(){
    notesContainer.innerHTML = localStorage.getItem("nt");
 }
 
 showTask();
