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


// 파보나치 수열237
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}
// --------------------------------------------


// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성하세요
  if (myAge === yourAge){
    return callFriend;
  }else if (myAge > yourAge){
    if (yourGender === 'male'){
    return callYoungerBrother;
    }else if (yourGender === 'female'){
    return callYoungerSister;  
    }
  }else{
    if (yourGender === 'male'){
    return callOlderBrother;  
    }else if (yourGender === 'female'){
    return callOlderSister;
    }
  }
}
// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5)


// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 checkPrice() 함수
function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만 원입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만 원입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만 원입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만 원입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

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

const N = 180;
let i = 1;
let count = 0;

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i += 1;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`);

// ---------------------------------------------------------


let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

// 1. 이미 외운 단어 3개를 삭제해 주세요
// 여기에 코드를 작성하세요


console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요
myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';
// myVoca.'default value' = '기본';


console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요
console.log(myVoca['default value'])
// 여기에 코드를 작성하세요


// ---------------------------------------------------------


let myVoca = {
  // 코드를 작성해 주세요.
  addVoca: function(name, int){
    myVoca[name] = int;
  },
  deleteVoca: function(name){
    delete myVoca[name];
  },
  printVoca: function(name){
    console.log(`"${name}"의 뜻은 "${myVoca[name]}"입니다.`);
  }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');


// 
let pass = '축하합니다! 합격입니다!';
let npass = '아쉽지만 불합격입니다...';

let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};
function passChecker(scoreObject) {
	// 여기에 코드를 작성하세요
let totalscore = 0;
  for(let score in scoreObject){
    totalscore += scoreObject[score];
  }if (totalscore >= 60){
    console.log(pass);
  }else{
    console.log(npass);
  }
}
    
   
passChecker(hyesoonScore);
passChecker(minsoonScore);


let today = new Date(2112, 7, 24);// 2112년 8월 24일
let jaeSangStart = new Date(2109, 6, 1); // 2109년 7월 1일

function workDayCalc(startDate) {
	// 여기에 코드를 작성하세요
	let timeDiff = today.getTime() - startDate.getTime();
	let dayDiff = timeDiff / 1000 / 60 / 60 / 24;
  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);

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
// -------------------------------------------


let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for(i = 0; i < celsiusTemps.length; i++){
  let F = 0;
  F = (celsiusTemps[i] * 9 / 5) + 32;
  fahrenheitTemps[i] = F;
//   for (let i = 0; i < celsiusTemps.length; i++) {
//   fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;} (간단하게)
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// -----------------------------------------------
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
fruits.splice(1, 1 , '사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요
fruits.splice(0, 1);


// ages 배열에 마지막 요소를 삭제해 주세요
ages.splice(5, 1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2, 2 , '26','28');


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0, 0 , 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    numbers.splice(i, 1);
    i--;
  }
}


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);

// --------------------------------

let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성하세요
for (let i = 0; i < groups.length; i++){
  teams[0].push(groups[i][0]);
  teams[1].push(groups[i][1]);
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);

// ----------------------------
// 아래 코드중 잘못된 부분을 수정해 주세요
function clone(object){
  let temp = [];
  for(let key in object){
    temp[key] = object[key];
  }
  return temp;
}
let espresso = ['espresso'];

let americano = clone(espresso);
let caffeLatte = clone(espresso);

americano.push('water');
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = clone(caffeLatte);
let vanillaLatte = clone(caffeLatte);
caffeMocha.push('chocolateSyrup');
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);