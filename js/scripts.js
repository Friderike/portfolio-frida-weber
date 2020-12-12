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


const scroll= () => {
const scrollGroup = document.getElementsByClassName(`smooth-scroll`);

for(let i= 0; i < scrollGroup.length; i++) {

//Listens for a click action on these smooth-scroll elements
scrollGroup[i].addEventListener(`click`,function(clickEvent) {

    //prevents default fast scroll down action
    clickEvent.preventDefault();

    //Gets the element to scroll down to
    let elementID = this.getAttribute(`href`).substring(1,this.getAttribute(`href`).length),
    element = document.getElementById(elementID);

    //Scrolls smoothly
    element.scrollIntoView({
    behavior:`smooth`
    });
});
}

console.log(scrollGroup)
}
scroll(); 


