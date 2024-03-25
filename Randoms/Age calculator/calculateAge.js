let userInput = document.getElementById("input-box");
 userInput.max = new Date().toISOString().split('T')[0];

 let p = document.getElementById('age');

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let bd = birthDate.getDate();
    let bm = birthDate.getMonth() + 1;
    let by = birthDate.getFullYear();

    let today = new Date();

    let td = today.getDate();
    let tm = today.getMonth() + 1;
    let ty = today.getFullYear();
        

    let dd, dm, dy;

    dy = ty - by;
    if(tm >= bm){
        dm = tm - bm;
         
    }
    else {
        dy--;
        dm = bm - tm;
    }
    if(td >= bd){
        dd = td - bd;
         
    }
    else {
        dm--;
        dd = getdayInMonth(by, bm) + td - bd;

    }
    if(dm < 0){
        dm = 11;
        dy--;
    }
        p.innerHTML = 'You are <span id="year">' + dy +'</span> year, <span id="months">' + dm + '</span> months and <span id="days">'+ dd + '</span> days Old'
}
function getdayInMonth(year, month){
    return new Date(year, month, 0).getDate();

}
