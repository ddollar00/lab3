const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function performCalculation(num1, num2, operation) {
    switch (operation) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case 'exit':
            console.log('Exiting...');
            rl.close();
            return;
        default:
            console.log('Invalid operation');
    }

    askForInput();
}

function askForInput() {
    rl.question('Enter the first number: ', (answer1) => {
        const num1 = parseFloat(answer1);
        rl.question('Enter the second number: ', (answer2) => {
            const num2 = parseFloat(answer2);
            rl.question('Enter the operation (+, -, *, or /), or "exit" to quit: ', (answer3) => {
                const operation = answer3;
                performCalculation(num1, num2, operation);
            });
        });
    });
}

askForInput();
