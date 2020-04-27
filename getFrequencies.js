const getFrequencies = (arr) => {
    let d = {}
    for(var i = 0; i < arr.length;i++){
        if(d[arr[i]]){
            d[arr[i]]+=1
        }else{
            d[arr[i]]=1
        }
    }
    return d
};

module.exports = getFrequencies;