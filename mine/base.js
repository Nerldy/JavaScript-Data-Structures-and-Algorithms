function looping(n) {
    console.log("n is now ", n);
    if (n === 1) {
        return console.log("Done");
    }

    return looping(n - 1);
}

looping(5);