let count = 0;
let countEl = document.getElementById('counter');
let dispEl = document.getElementById('prev');
function increment(){
    count += 1 ;
    countEl.textContent = count;
    // console.log(count); 
}
function decrement(){
    count -= 1
    if (count < 0){
        count=0
        alert("Count cannot go Below 0!")
    }
    countEl.textContent = count;
    // console.log(count); 
}
function reset(){
    countEl.textContent = 0;
    count = 0;
    dispEl.textContent = "Count Entries: ";
    // console.log(count); 
}
function disp(){
    console.log(count);
}
function save(){
    let countStr = count + " - "
    dispEl.textContent += countStr;
    // console.log(count); 
}
