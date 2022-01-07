module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
    let arr = n.split("");
    let reverseString = "";



    for (let max = arr.length - 1; max >= 0; max--) {
        reverseString += arr[max];
    }

    return +reverseString;

    // if (n === undefined) {
    //     return 0;
    // }


    // n = n + "";
    // let array = [];
    // array  = n.split('').reverse().join('');

    // return +array;
  
}


