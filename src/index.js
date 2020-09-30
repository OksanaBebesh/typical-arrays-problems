
exports.min = function min (array) {
  

  return (Array.isArray(array) && array.length) ? [...array].sort((a,b)=>a-b)[0]:0;;
}

exports.max = function max (array) {
 
  return (Array.isArray(array) && array.length) ? [...array].sort((a,b)=>b-a)[0]:0;
}

exports.avg = function avg (array) {
  let result = 0;
 
  if (Array.isArray(array) && array.length){
      result =  array.reduce((total, amount, index, array)=>{
          total += amount;
            if (index === array.length - 1){
              return total/array.length;
            }else {
              return total;
            }
      });
  }
   return result;
}
