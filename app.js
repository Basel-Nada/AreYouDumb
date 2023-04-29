const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('#yes');
const nobtn = document.querySelector('#no');
const confirmation = document.querySelector('.confirmation');

const yesAnswerMethod = () => {
    question.style.display = 'none';
    confirmation.style.display = 'block';
}

const noAnswerMethod = () => {
    nobtn.style.position = 'absolute';

    const xPosition = Math.floor(Math.random() * wrapper.clientWidth);
    const yPosition = Math.floor(Math.random() * wrapper.clientHeight);

    nobtn.style.left = xPosition >= wrapper.clientWidth / 2 ? `${xPosition - nobtn.clientWidth }px`: `${xPosition}px`;
    nobtn.style.top = yPosition >= wrapper.clientHeight / 2 ? `${yPosition - nobtn.clientHeight }px`: `${yPosition}px`;
}

yesbtn.addEventListener('click', yesAnswerMethod);
nobtn.addEventListener('click',noAnswerMethod);