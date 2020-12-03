console.log(`Hi there, thanks for stopping by!`)


const navSlide = ()=> {

    const hamburger = $(`.hamburger`)[0];
   const navS = $(`.slide`)[0];
   const close = $(`.close`)[0]; 
   
   //console.log(navS)
   // $ is equal to document.querySelector or document.querySelectorAll
   

   hamburger.addEventListener(`click`, () => {
       navS.classList.toggle(`slide-active`);
   }); 
 
   close.addEventListener(`click`, () => {
       navS.classList.toggle(`slide-active`);
   });
  
} 
navSlide();

/*
const scroll= () => {
const myWork = $(`#my-work`);

myWork.scrollIntoView(
    {behavior: `smooth`,}
);
console.log(myWork)
}
scroll();*/



/*
$(`#my-work`).scrollIntoView({
    behavior: `smooth`
});
*/

//WHY IS THIS NOT A FUNCTION AGAIN?

/*
$(`#contact`).scrollIntoView({
    behavior: `smooth`
});
*/

