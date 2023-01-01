console.log("=====================");
console.log("       MENU   ");
console.log("=====================");
console.log(" [1] ADDITION");
console.log(" [2] SUBTRACTION");
console.log(" [3] MULTIPLICATION");
console.log(" [4] DIVISION");
console.log(" [5] MODULA DIVISION");
console.log(" [0] EXIT");
console.log("=======================");

const choice = prompt('Enter your choice in above menu: ');

const number1 = parseFloat(prompt('Enter first number : '));
const number2 = parseFloat(prompt('Enter second number : '));

switch(choice)
  {
    case '1':
      console.log("The ADDITION is :" ,number1 + number2);
      break;
      
      case '2' :
      console.log("The SUBTRACTION is : " ,number1 - number2);
      break;
      
      case '3' :
      console.log("The MULTIPLICATION is : " ,number1 * number2);
      break;
      
      case '4' :
      console.log("The DIVISION is : " ,number1 / number2);
      break;
      
      case '5' :
      console.log("The MODULA DIVISION is : " ,number1 % number2);
      break;
      
      case '0' :
      console.log("TERMINATED BY USER.");
      break;
      default :
      console.log("INVALID CHOICE.PLEASE CHECK IT AGAIN.");
  }