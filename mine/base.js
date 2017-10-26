function countdown(n) {
    console.log(n);
    if (n === 0) {
        return "Done!";
    }

    if (n > 0) {
        return countdown(n - 1);
    }

    else {
        return countdown(n + 1);
    }
}

console.log(countdown(-3));