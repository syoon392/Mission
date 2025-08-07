// 여기에 코드를 작성하세요
let espresso = 10
let milk = 170
let chocolateSyrup = 50
let whippedCream = 60

// 메뉴별 칼로리 테스트
console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리

// 여기에 코드를 작성하세요
function printChorus(){
  console.log('무궁화 삼천리 화려 강산');
  console.log('대한 사람 대한으로 길이 보전하세');
}

// 애국가 가사
console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
printChorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
printChorus();

console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
printChorus();

console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
printChorus();


// 여기에 코드를 작성하세요
function teraToGiga(X){
  console.log(X + 'TB는')
  console.log(X * 1024 + 'GB ' + '입니다.');
}
function teraToMega(X){
  console.log(X + 'TB는')
  console.log(X * 1024 * 1024 + 'MB ' + '입니다.')
}


// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);

// 여기에 코드를 작성하세요
function bmiCalculator(name, weight, height){
  console.log(name + '님의 체질량지수는 ' +  weight / (height * height / 10000) + '입니다.')
}

// 테스트 코드
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);

// 여기에 코드를 작성하세요
function interestCalculator(amount, term, rate) {
return amount * term * rate / 100;
}

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');