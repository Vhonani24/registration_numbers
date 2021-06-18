//get reference to the input box
var theRegNumber = document.querySelector("#regNumber");
//get reference to the clear button
var clearButton = document.querySelector("#clear");
//get reference to the add button
var addButton = document.querySelector("#add");
//get reference to the select button
var selectButton = document.querySelector(".form-select");
//for testing
var retrieve = document.querySelector(".retrieve");

var savedReg = localStorage.getItem('registration');
    
savedReg = savedReg ? savedReg.split(',') : [];


function storeRegNum(){ //stores items in the localStorage
    var reg = theRegNumber.value;
    
    var result = reg.toUpperCase();

    var regex  = /^[a-zA-Z]{2}\s[0-9]+$/;

   
    console.log(savedReg.length);
    

   
    if(reg.match(regex) !="" &&reg.match(regex) != null){
        if(reg.startsWith('CA') || reg.startsWith('CJ') || reg.startsWith('CY')){
            if(!savedReg.includes(reg)){
                savedReg.push(result.match(regex));
                console.log(savedReg.length);


            }
            else{
                alert('please enter valid registration');
            }
            
        }
        

    }

 



    window.localStorage.setItem("registration", savedReg.toString());  
    //converting object to string
    
}


function getReg(){ //retrieves items in the localStorage
    
    if(selectButton.value === "Cape Town"){
     retrieve.innerHTML = "";
        for(var i=0;i < savedReg.length;i++){
            if(savedReg[i].startsWith('CA')){
                var cape = [];
                cape.push(savedReg[i]);
                cape.forEach(function(reg)  {
                    var div = document.createElement("div");
                    div.innerHTML = reg;
                    div.className = 'test';
                    retrieve.appendChild(div);

                })
                
            }
            

        }
        
        
    }
    else if(selectButton.value === "Bellville"){
     
        for(var i=0;i < savedReg.length;i++){
            if(savedReg[i].startsWith('CY')){
                var bell = [];
                bell.push(savedReg[i]);
                bell.forEach(function(reg) {
                    var div = document.createElement("div");
                    div.innerHTML = reg;
                    div.className = 'test';
                    retrieve.appendChild(div);

                })
                
            }
            

        }
        
        
    }
    else if(selectButton.value === "Paarl"){
     
        for(var i=0;i < savedReg.length;i++){
            if(savedReg[i].startsWith('CJ')){
                var paarl = [];
                paarl.push(savedReg[i]);
                paarl.forEach(function(reg) {
                    var div = document.createElement("div");
                    div.innerHTML = reg;
                    div.className = 'test';
                    retrieve.appendChild(div);

                })
                
            }
            

        }
        
        
    }
    else if(selectButton.value === "All Towns"){
     
               
                savedReg.forEach(function(reg) {
                    var div = document.createElement("div");
                    div.innerHTML = reg;
                    div.className = 'test';
                    retrieve.appendChild(div);

                })
                
            
            

        
        
        
    }
}
function reset(){
    localStorage.clear();
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    addButton.onclick = storeRegNum;
    clearButton.onclick = reset;
    selectButton.onclick = getReg;
}
  
   


   

    
    
                    
                   
 
