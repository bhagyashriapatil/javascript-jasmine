// 1. just create if else block and add diffeent function into it
// 2. test that file 
// 3. if block execute then function invoked which exists in if block. vice-verca else
// which tell us function either called or not
// andReturn
// andCallFake
// andCallThrough
// andThrow




function spiesTest (param){
 if(!param){ 
   function ifExecute(){
    console. log("execute if");
   }
   ifExecute()
 }
 else{
   function elseExecute(){
    console. log("execute else")
   }
   elseExecute()
  }
}

// var spiesTest = function(param) {
//   if(param){ 
//     function ifExecute(){
//      console. log("execute if");
//     }
//     ifExecute();
//   }
//   else{
//     function elseExecute(){
//      console. log("execute else")
//     }
//     elseExecute();
//    }
// };

// var myObj = {
//   spiesTest: function(){
//       if(param){ 
//     function ifExecute(){
//      console. log("execute if");
//     }
//     ifExecute();
//   }
//   else{
//     function elseExecute(){
//      console. log("execute else")
//     }
//     elseExecute();
//    }
//   }
// }