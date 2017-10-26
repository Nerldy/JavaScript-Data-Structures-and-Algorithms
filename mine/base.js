//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base = 0, expo = 0) {
    if (expo === 0) {
        return 1;
    }
    if (expo === 1) {
        return base;
    }

    let number = base;

    if (expo > 1) {
        while (expo > 1) {
            number *= base;
            expo--;
        }

        return number;
    }

    if (expo === -1) {
        return 1 / base;
    }

    while (expo < -1) {

        number *= base;

        expo++;
    }

    return 1 / number;


}


console.log(exponent(4, -3));