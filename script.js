const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const icon = document.querySelector('.icon img');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

let clickedYes = false;

yesBtn.addEventListener('click', () => {
    if (!clickedYes) {
        question.innerHTML = 'I love You too ❤️';
        icon.src = 'https://i.pinimg.com/originals/4a/db/c5/4adbc5f251620f46dd851435371533ec.gif';
        clickedYes = true;
    } else {
        question.innerHTML = 'will meet soon 😁';
        icon.src = 'https://i.pinimg.com/originals/b9/86/18/b98618683cd2ec449ade3e0d645b6ee4.gif';
    }
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});