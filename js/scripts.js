console.log(`Hi there, thanks for stopping by!`);


const navSlide = ()=> {

    const hamburger = $(`.hamburger`)[0];
   const navS = $(`.slide`)[0];
   const close = $(`.close`)[0]; 
   const body = $(`body`)[0];
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
const scrollGroup = document.getElementsByClassName(`smooth-scroll`);

for(let i= 0; i < scrollGroup.length; i++) {
scrollGroup[i].scrollIntoView (
    {behavior: `smooth`,}
);
}

console.log(scrollGroup)
}
scroll(); */


