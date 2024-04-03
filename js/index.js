const inputEl = document.querySelector('.text-input');
const outputEl = document.querySelector('.text-output');
const buttonEl = document.querySelector('.click-me-button');

buttonEl.addEventListener('click', onClick);
outputEl.addEventListener('mousedown', onMouseDown);

function onClick() {
  outputEl.textContent = inputEl.value;
}

function onMouseDown(e) {
  console.log('event mousedown', e);

  const drag = e.target;

  drag.style.position = 'absolute';
  drag.style.zIndex = 1000;

  document.body.append(drag);

  function moveDrag(x, y) {
    drag.style.left = x - drag.offsetWidth / 2 + 'px';
    drag.style.top = y - drag.offsetHeight / 2 + 'px';
  }

  moveDrag(e.x, e.y);

  function onMouseMove(e) {
    moveDrag(e.x, e.y);
  }

  document.addEventListener('mousemove', onMouseMove);

  // Обробник події 'mouseup' видаляє обробник 'mousemove' після відпускання миші

  drag.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    drag.onmouseup = null;
  };
}

// Забороняємо стандартну поведінку перетягування
drag.ondragstart = function () {
  return false;
};
