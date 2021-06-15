//get reference to the input box
var theRegNumber = document.querySelector("#regNumber");
//get reference to the clear button
var clearButton = document.querySelector("#clear");
//get reference to the add button
var addButton = document.querySelector("#add");
//get reference to the show button
var showButton = document.querySelector("#show");
//for testing
var test = document.querySelector(".test");





  
   


   


    
    
                    
                   
 

function reset(){
    localStorage.clear();
    location.reload();
    test.innerHTML = "";
}

addButton.addEventListener("click", findRegNumber)
clearButton.addEventListener("click", reset)
