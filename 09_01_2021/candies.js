const candies = (n,m) => {
    if( n > 10 || n < 1 || m < 2 || m > 100){
        return false;
    }
    else{
        let a = Math.floor(m/n);
        let b = a*n;
        console.log(b);
    }
}
candies(3,10);