function getOdd(n) {
    let oddNumbers = [];
    for(let i = 0; i < n; i++){
      if(i % 2 === 0){
        continue;
      }
      oddNumbers.push(i);
      if(oddNumbers.length === 5){
        break;
      }
    }
    return oddNumbers;
    
}
console.log(getOdd(10));