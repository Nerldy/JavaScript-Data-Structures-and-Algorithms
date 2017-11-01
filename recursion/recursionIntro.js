//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loopThroughNumbers(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

// loopThroughNumbers(5);

//2. Next, try looping just like above except using recursion

function recursionLoop(n) {
    console.log("n is now www", n);
    if (n <= 1) {
        return console.log("Doneddd");
    }

    return recursionLoop(n - 1);
}

// recursionLoop(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
    let counter = 1;
    let baseNum = base;
    while (counter < expo) {
        baseNum *= base;
        counter++;
    }

    return baseNum;
}

// console.log(exponent(5, 7));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.


function recursiveExponent(base, expo) {
    if (expo === 0) {
        return 1;
    }
    return base * recursiveExponent(base, expo - 1);

}

// console.log(recursiveExponent(3, 3));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.


function recursiveWithMultiplier(arr = [], num = 0) {
    let counter = 0;
    let newArray = [];

    if (arr.length === 0) {
        return 0;
    }

    function grabArray(i) {
        if (i === arr.length) {
            return newArray;
        }
        let calculate = arr[i] * num;
        newArray.push(calculate);
        return grabArray(++counter);
    }

    return grabArray(counter);
}

const myArray = [5, 6, 9, 7, 8, 12];

console.log(recursiveWithMultiplier(myArray, 2));


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
