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