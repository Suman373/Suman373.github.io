// To count the number of passengers entering the metro station
// document.getElementById("count").innerText = 5;


let count = 0; // the variable to store the count data

//this function increases the no. of passengers entered when enter button is clicked and increament() is invoked.
let count_el=document.getElementById("count");
function increament(){
    count_el.innerText= ++count;
}
function save(){
   let save_el=document.getElementById("display");
   let count_str = count + " - " ;
   save_el.textContent += count_str;
    // innerText shows what is only human readable , we are not using it because the empty space " " after each entry is getting removed i.e., 45 -50 -60 which doesn't look quite appealing.
    count_el.innerText = 0;// reseting the count to 0 
    count=0; // to reset the initial passenger count value to 0 whenever the previous entry has been saved.This makes sure every new entry starts from 0 itself.

}
