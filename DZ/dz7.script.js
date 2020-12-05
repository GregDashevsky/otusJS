// Получаем текст из textarea
function getText() {
  const userText = document.querySelector('.newP');
  return userText.value;
}

// По клику на кнопку добавляем новый параграф, очищаем бокс, скрываем кнопку, проверяем
// количество параграфов и удаляем их если больше 5
function buttonClick() {
  const text = getText();
  addParagraph(text);
  clearInput();
  hideButton();
  removeTheChild();
}

// Создаём новый элемент и добавляем на экран
function addParagraph(text) {
  const newPar = document.createElement('li');
  newPar.innerText = text;
  const list = document.querySelector('.list');
  list.append(newPar);
}

function clearInput() {
  const input = document.querySelector('.newP');
  input.value = '';
}

function showButton() {
  const button = document.querySelector('.button');
  button.hidden = false;
}

function hideButton() {
  const button = document.querySelector('.button');
  button.hidden = true;
}

function appearButton() {
  const input = document.querySelector('.newP');
  if (input.value > 0) {
    showButton();
  } else {
    hideButton();
  }
}

const textBox = document.querySelector('.newP');
// Слушатель проверяет, есть ли данные в боксе. Если есть - показывает кнопку, если нет, то скрывает
textBox.addEventListener('input', appearButton);

// Удаляем первый дочерний элемент
function removeTheChild() {
  const list = document.querySelector('.list');
  let listLength = list.children.length;
  const firstCh = list.firstChild;
  if (listLength > 4) {
    firstCh.remove();
    --listLength;
  }
}
