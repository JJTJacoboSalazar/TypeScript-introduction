// const operations = ['multiply', 'divide', 'add'];

const calculator = (a: number, b: number, operator: 'multiply' | 'add' | 'divide') => {
    // if (!operations.includes(operator)) {
    //     console.log("This operation is not supported")
    // }
    switch (operator) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                return 'You cannot divide by 0';
            } else {
                return a / b;
            }
        case 'add':
            return a + b;
        default:
            return 'Invalid operator';
    }
}

const result = calculator(6, 2, 'multiply')
console.log("Your result is", result)