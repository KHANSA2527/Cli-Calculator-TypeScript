#! /usr/bin/env node
import inquirer from "inquirer";
import * as operation from'./operation.js'

 async function Calculator()  {
  let answer =  
  await  inquirer.prompt([
   {
     type: "input",
     name: "num1",
     message: "Enter 1st Number:",
   },
   {
     type: "input",
     name: "num2",
     message: "Enter 2nd Number:",
   },
   {
     type: "list",
     name: "operation",
     message: "Choose what do you want?:",
     choices: ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)', 'Modulas (%)'],
   },
 ]);
 let number1 = parseFloat(answer.num1);
 let number2 = parseFloat(answer.num2);

  let result ;
 
  if (answer.operation == 'Addition (+)') {
     result = operation.Add(number1, number2);   
  }
 else if(answer.operation == 'Subtraction (-)'){
   result = operation.Subtract(number1, number2);
  
   }
 else if(answer.operation == 'Multiplication (*)'){
  result = operation.Mult(number1, number2);
  
  }
else if(answer.operation == 'Division (/)'){
    result = operation.Division(number1, number2);
  }
  else if(answer.operation == 'Modulas (%)'){
    result = operation.Modulas(number1, number2);
  }
 
 else {
  console.log('Invalid Operation');
    result;
     
   }
   if(result !== undefined){
    console.log("result",result);
  }
    let confirm =  await inquirer.prompt([{
      type:"confirm",
      name:"confirm",
      message:"Do you want Exit or Not",
    }]);
    if(confirm.confirm == false){
      Calculator()
    }
   
}

console.log("=======Console Calculator Application=======\n");
Calculator();
