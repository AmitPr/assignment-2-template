const filterOdd = (arr) => {
    let n = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2==1){
            n.push(arr[i])
        }
    }
    return n
};

module.exports = filterOdd;
