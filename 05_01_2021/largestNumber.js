const largestNumber = (n) => {
    if (n < 1 || n > 9) {
        return false;
    }
    else {
        let number = '';
        for( let i = 0; i <n ;i++){
            number += 9;
        }
        console.log(Number(number));
    }
}

largestNumber(2);