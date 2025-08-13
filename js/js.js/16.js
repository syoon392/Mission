// 이 배열에서 홀수를 구해 출력

const nums = [1, 3, 4, 6, 9, 10, 12];
function getMultiplesOfThree(Array){
  const X = [];
  for(let a = 0 ; a < Array.length; a++){
    if(Array[a] % 3 === 0){
      X[X.length] = Array[a];
    }
  }
  return X;
}
console.log(getMultiplesOfThree(nums)); 
// [3, 6, 9, 12]가 출력되어야 함
