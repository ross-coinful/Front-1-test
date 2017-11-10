// sum.js
// 取得陣列中的最小值
export function sum(array){
	var sum = 0;
    for(var i=0 ; i < array.length ; i++){
        sum = array[i] + sum;
    }
    return sum;
}