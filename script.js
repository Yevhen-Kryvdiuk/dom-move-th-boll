const field = document.querySelector('.field');
const ball = document.querySelector('.ball');


field.onclick = function (e) {
    const fieldRectObject = field.getBoundingClientRect();
    const fieldInnerCoords = {
        top: fieldRectObject.top + field.clientTop,
        left: fieldRectObject.left + field.clientLeft
    };
    const ballCoordinates = {
        left : e.clientX - ball.clientWidth / 2 - fieldInnerCoords.left,
        top : e.clientY - ball.clientHeight / 2 - fieldInnerCoords.top
    };

    if (ballCoordinates.top < 0) ballCoordinates.top = 0;
    if (ballCoordinates.left < 0) ballCoordinates.left = 0;

    if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
        ballCoordinates.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoordinates.top + ball.clientHeight > field.clientHeight) {
        ballCoordinates.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoordinates.left + 'px';
    ball.style.top = ballCoordinates.top + 'px';

};

