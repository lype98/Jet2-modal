const $ = document.querySelector.bind(document);

const setVH = ()=> {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); // use custom vh unit to match innerHeight of the phone
}; setVH();

window.addEventListener('resize', ()=>{
    setVH();
});

/** ------------------------------------------------- Submit button ------------------------------------------------- */
const submitInceptionBtn = $('.submit-div__inception__button');
const modalDiv = $('.modal');

submitInceptionBtn.addEventListener('pointerdown', (e)=> { // submit inception button pointerdown event
    modalDiv.classList.add('bg-active');
});

/** ------------------------------------------------- modal ------------------------------------------------- */
const modalCancelBtn = $('.modal__footer__cancel');
const modalContinueBtn = $('.modal__footer__continue');
const modalBonusDiv = $('.modal-bonus');
const modalBonusOKBtn = $('.modal-bonus__footer__ok');

modalCancelBtn.addEventListener('pointerdown', (e)=> { // cancel button pointerdown event
    modalDiv.classList.remove('bg-active');    
});

modalContinueBtn.addEventListener('pointerdown', (e)=> { // continue button to bonus modal pointerdown event
    modalBonusDiv.classList.add('bg-active');
});

modalBonusOKBtn.addEventListener('pointerdown', (e)=> { // OK button pointerdown event
    modalBonusDiv.classList.remove('bg-active');    
});