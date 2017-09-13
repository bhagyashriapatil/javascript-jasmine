var addAny = function(){ 

    var sum = this.currentVal; 
    for (var i=0; i<arguments.length; i++) 
    { 
     sum +=arguments[i]; 
    } 
    this.currentVal=sum;  
    return this.currentVal;
     
}