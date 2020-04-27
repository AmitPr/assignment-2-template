const fibonacciNums = (n) => {
    let arr = []
    let i =0
    while(arr.length<n){
        if(i ==0){
            arr.push(0)
        }else if (i == 1){
            arr.push(1)
        }else{
            arr.push(arr[i-1]+arr[i-2])
        }
        i++
    }
    return arr
};

module.exports = fibonacciNums;