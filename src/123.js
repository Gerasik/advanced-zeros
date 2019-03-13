function getPrimitives(number,base){
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
        maxMin.push(calcAll(number, primitive[j])/resCount[j]);
        console.log(calcAll(number, primitive[j])/resCount[j]);
    } ;
    maxMin.push(calcAll(number, 5));    
    var result = maxMin[0];
    for(var j=0; j<maxMin.length;j++){
        result = Math.min(maxMin[j], result);
    };
    console.log(primitive);
    console.log(resCount);
    return result;
}

var geras = getPrimitives(10,10);
console.log('result = '+geras);

function calcAll(number, base){
    var result = 0;
    while(base <= number){
        result += Math.floor(number/base);
        console.log('base: '+base+', number: '+ number+', result: '+ result);
        base *= base;
    } 
    return result;
};


