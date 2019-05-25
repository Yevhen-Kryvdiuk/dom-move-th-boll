const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

field.addEventListener('click', (event) => {

    const fieldRectObject = field.getBoundingClientRect();
    const {top: fieldRectTop, left: fieldRectLeft} = fieldRectObject;
    const {clientTop: fieldClientTop,
           clientLeft: fieldClientLeft,
           clientHeight: fieldHeight,
           clientWidth: fieldWidth} = field;
    const {clientX: clickClientX, clientY: clickClientY} = event;
    const {clientWidth: ballWidth, clientHeight: ballHeight} = ball;

    const fieldInnerTop = fieldRectTop + fieldClientTop;
    const fieldInnerLeft = fieldRectLeft + fieldClientLeft;

    let ballTop = clickClientY - ballHeight / 2 - fieldInnerTop;
    let ballLeft = clickClientX - ballWidth / 2 - fieldInnerLeft;

    if (ballTop < 0) ballTop = 0;
    if (ballLeft < 0) ballLeft = 0;

    if (ballLeft + ballWidth > fieldWidth) {
        ballLeft = fieldWidth - ballWidth;
    }
    if (ballTop + ballHeight > fieldHeight) {
        ballTop = fieldHeight - ballHeight;
    }

    ball.style.left = `${ballLeft}px`;
    ball.style.top = `${ballTop}px`;

});

