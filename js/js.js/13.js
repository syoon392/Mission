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
