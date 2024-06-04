const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

const parsearguments = (args) => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            a: Number(args[2]),
            b: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const cleanArguments = parsearguments(process.argv);

// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');
console.log(process.argv);


const a: number = Number(cleanArguments.a);
const b: number = Number(cleanArguments.b);

multiplicator(a, b, `Multiplied numbers ${a} and ${b}, the result is:`);