// const operations = ['multiply', 'divide', 'add'];

export type Operations = 'multiply' | 'add' | 'divide'
type Result = number

const calculator = (a: number, b: number, operator: Operations ): Result => {
    // if (!operations.includes(operator)) {
    //     console.log("This operation is not supported")
    // }
    switch (operator) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                throw new Error('Cannot divide by 0')
            } else {
                return a / b;
            }
        case 'add':
            return a + b;
        default:
            throw new Error('Operator not defined')
    }
}

const result = calculator(500, 12, 'multiply')
console.log("Your result is", result)