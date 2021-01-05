const addTwoDigits = (n) => {
    if (n < 10 || n > 99) {
        return false;
    }
    else {
        let a = Math.floor(n / 10);
        let b = n - (a * 10);
        console.log(a + b);
    }
}

addTwoDigits(29);