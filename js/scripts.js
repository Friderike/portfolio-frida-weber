console.log(`Hi there, thanks for stopping by!`)


const navSlide = ()=> {

    const hamburger = $(`.hamburger`)[0];
   const navS = $(`.slide`)[0]; 
   //console.log(navS)
   // $ is equal to document.querySelector or document.querySelectorAll
   

   hamburger.addEventListener(`click`, () => {
       navS.classList.toggle(`slide-active`);
   }); 

   
} 

navSlide();

