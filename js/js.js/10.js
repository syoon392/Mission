// 여기에 코드를 작성하세요
for(let a = 1; a <= 50; a++){
  console.log(a * 2);
}
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

function printTriangle(height) {
	// 여기에 코드를 작성하세요
    let Ikon = '';
	for (let X = 0; X < height; X++){
	  Ikon += '*';
	  console.log(Ikon);
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
