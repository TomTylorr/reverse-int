module.exports = function reverse (n) {

    if (n === undefined) {
        return 0;
    }


    n = n + "";
    let array = [];
    array  = n.split('').reverse().join('');

    return +array;
  
}


