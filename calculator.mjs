console.log("Welcome to calaulator");
const firstOperand = Number(process.argv[2]);
const operation = process.argv[3];
const secondOrepand = Number(process.argv[4]);


console.log(`You have entered - ${firstOperand}, ${secondOrepand} for ${operation}`);
switch(operation){

    case "+":
        console.log(`The result is ${firstOperand + secondOrepand}`);
    break;
    case "-":
        console.log(`The result is ${firstOperand - secondOrepand}`);
    break;
    case "x":
        console.log(`The result is ${firstOperand * secondOrepand}`);
    break;
    case "/":
        console.log(`The result is ${firstOperand / secondOrepand}`);
    break;
    default :
    console.log('Invalid operation');
    break;

}

