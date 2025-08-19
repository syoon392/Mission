const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  event.target.classList.toggle('done');
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
for (let item of items) {
  item.addEventListener('click', updateToDo);
}

// 테스트 코드
items[2].removeEventListener('click', updateToDo);

// ==============================================
const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
	// 여기에 코드를 작성하세요
	const insert = document.createElement('li');
	insert.textContent = text;
	toDoList.append(insert);

}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');

// =====================================
const toDoList = document.querySelector('#to-do-list');

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  if (event.target.classList.contains('item')) {
    event.target.classList.toggle('done');
  }
}

// 2. 각 li 태그가 아닌 하나의 태그에만 이벤트 핸들러를 등록해 주세요
toDoList.addEventListener('click', updateToDo);

// 테스트 코드
const newToDo = document.createElement('li');
newToDo.textContent = '가계부 정리하기';
newToDo.classList.add('item');
toDoList.append(newToDo);

toDoList.children[2].addEventListener('click', function(e) {e.stopPropagation()});


//=========================


const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

// 1. flagUp 함수를 완성해 주세요
function flagUp(e) {
  // 여기에 코드를 작성해 주세요
  if (e.button === 0) {
    flagBlue.classList.add('up');
  } else if (e.button === 2) {
    flagWhite.classList.add('up');
  }
  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막아주세요 
document.addEventListener('contextmenu', function (event) {
  // 여기에 코드를 작성하세요
  event.preventDefault();
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);
