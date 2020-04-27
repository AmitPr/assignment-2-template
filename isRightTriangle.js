const isRightTriangle = (a, b, c) => {
    let arr = [a*a,b*b,c*c]
    if(arr.includes(0)){
        return false
    }
    arr.sort((a, b) => a - b)
    if(arr[0]+arr[1]==arr[2]){
        return true
    }else{
        return false
    }
};

module.exports = isRightTriangle;
