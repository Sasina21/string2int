const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Input: ', name => {
    console.log(string2int(name));
    readline.close();
  });
  
  //console.log(string2int('123'));
  
  function string2int(input){
    var result = 0;
    var count = 0;
    input = input.replace(' ', '');
    for(var i = input.length-1 ; i >= 0 ; i--){
      if(input[i] >= 0){
         result = result + (input[i] * (10**count)) ;
         count++;
         //console.log(result + ' ' + count + ' ');
      }
    }
    if(result > 0){
      return result;
    }
  }