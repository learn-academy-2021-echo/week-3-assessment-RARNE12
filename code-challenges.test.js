// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a) Create a test with expect statements for each of the variables provided.

// a describe method that list the name of the function or naming of the particulat test
describe("fibNum", () => {
    it("the sequence in which each number is the sum of the two preceding ", () => {
        expect(fibonacci(6)).toEqual(1, 1, 2, 3, 5, 8)
    })
})


// Pseudo code:
// 1. This function takes a input number greater than 2
// 2. Declare 2 variables that takes tracks the previous and current numbers
// 3. - 2 variables, add the 2 variables
// 4. - create an array that shows the sum of the 2 variables


// b) Create the function that makes the test pass.

var fibNum(num) => {
    if ((fibNUM) > = 2 {
        return `number needs to be greater than 2`
    }
    if else (input > 2) {
        let num1 = 1,
            num2 = 2

        let array = [num1, num2]
        for (let i = 0; i < input.length - 2, i++) {
            let num = num1 + num2
            array.push(sum)
            num1 = array[2 + i]
            num1 = array[1 + i]
        }
        return array
    }


    // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

    // a. Create a test with expect statements for each of the variables provided.


    // a describe method that list the name of the function or naming of the particulat test
    describe("oddNums", () => {
        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        //  Expected output: [-9, 7, 9, 199]

        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        //  Expected output: [-823, 7, 23]

        // a test it method, nested within the describe block, that in plan words, descibes what the function does
        it("filters odd numbers then puts them in least to greatest order ", () => {
            // an expected method, nested within the test block, callin on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
            expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
            expect(oddNums(fullArr2)).toEqual([-823, 7, 23])

        })
    })

    // b) Create the function that makes the test pass.

    const oddNums = (arr) => {
        return arr.filter(value => value % 2 !== 0 && typeof value === "number").sort((a, b) => (a - b))
    }

    // Pseudo code:
    // create af function that returns only the values at the odd indexes
    // declare a function that takes in an array
    // sort array in ascending order
    // return a higher-order function that takes in the value and the index
    // return only the values that have an odd index
    // log the function and pass in the array


    // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

    // // a) Create a test with expect statements for each of the variables provided.



    // a describe method that list the name of the function or naming of the particulat test
    describe("numbersToAdd", () => {
        var numbersToAdd1 = [2, 4, 45, 9]
        // // Expected output: [2, 6, 51, 60]

        var numbersToAdd2 = [0, 7, -8, 12]
        // // Expected output: [0, 7, -1, 11]

        var numbersToAdd3 = []
        // // Expected output: []
        // a test it method nest within the describe block, that in plan words, descibes what the function does
        it("filters numbers that when added, will retun an accumulated sum; an empty array will return an empty array", () => {
            // an expected method, nested within the test block, callin on the numbersToAdd () function, followed by the .toEqual() matcher that checks the expected output of the function return.
            expect(numbersToAdd(numbersToAdd1)).toEqual([2, 6, 51, 60])
            expect(numbersToAdd(numbersToAdd2)).toEqual([0, 7, -1, 11])
            expect(numbersToAdd(numbersToAdd3)).toEqual([])
        });
    });

    //b) Create the function that makes the test pass.

    const numbersToAdd = arr => {
        return arr.map((sum => value => sum += value)(0));
    }

// Pseudo code:
// create af function that returns only accumulating sum
// declare a function that takes in an array
// sort array in ascending order
// return a higher-order function that takes in the value and the index
// return only the values that have been concat for total sum
// log the function