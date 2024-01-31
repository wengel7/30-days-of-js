
   const inputList = document.getElementById('inputList'); 
   const listContainer = document.getElementById('listContainer');
  
function updateHTML(){
   if(inputList.value == ''){
    alert('Enter a list first');
   }
   else{
    let listed = document.createElement('li');
    listed.innerHTML = '<p>' + inputList.value +'</p>';
    listContainer.appendChild(listed);


    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    listed.appendChild(span); 

   } 
    inputList.value = '';
    saveData();
};

listContainer.addEventListener("click", (clickable) => {
   if(clickable.target.tagName === "LI"){
      clickable.target.classList.toggle("checked");
      saveData();
   }
   else if(clickable.target.tagName === "SPAN"){
      clickable.target.parentElement.remove();
      saveData();
   }
}, false);

function saveData(){
   localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

