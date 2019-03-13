module.exports = function getZerosCount(number,base){
    var maxMin = [];
    var primitive = [];
    var resCount = [];
    var i = 2;
    while(i<=base){
    if(base % i == 0 ){
        if(i == primitive[primitive.length-1]){
            ++resCount[resCount.length-1];
        }else {
            resCount.push(1);
            primitive.push(i);
        }
        
        base = base / i;
    } 
    else{
        i++;
    }};
    for(var j=0; j<resCount.length; j++){
        maxMin.push(Math.floor(calcInkl(number, primitive[j])/resCount[j]));
    } ;   
    var result = maxMin[0];
    for(var j=0; j<maxMin.length;j++){
        result = Math.min(maxMin[j], result);
    };
    return result;
}


function calcInkl(number, base){
    var result = 0;
    var baseClone = base;
    while(base <= number){
        result += Math.floor(number/base);
        base *= baseClone;
    } 
    return result;
};