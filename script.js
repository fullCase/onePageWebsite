const menuWrapper = document.querySelector('[data-menuContainer]');
const menuLinks = document.querySelectorAll('[data-menuLink]');
const pages = document.querySelectorAll('[data-pages]');
const menuBtn = document.querySelector('[data-mobileBtn]');

const ScrollClassName = 'scroll';
const ActiveClassName = 'active';

const changeClassName = (a, obj, className) => {
   if(a)
      obj.classList.add(className);
   else
      obj.classList.remove(className);
};

const getScrollPos = () =>{
   return Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);  
}




menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle(ActiveClassName);
})

menuLinks.forEach(element => {
   element.addEventListener("click", () => {
      if(screen.width < 1000)
         menuBtn.classList.toggle(ActiveClassName);
   })
});

// scrollAnimation(1, pages[3]);

window.addEventListener("scroll", () =>{
   changeClassName(window.scrollY, menuWrapper, ScrollClassName);
   
   if(getScrollPos() < 25){
      changeClassName(1, menuLinks[0], ActiveClassName);
      changeClassName(0, menuLinks[1], ActiveClassName);
   }
   else if(getScrollPos() > 25 && getScrollPos() < 50){
      changeClassName(1, menuLinks[1], ActiveClassName);
      changeClassName(0, menuLinks[0], ActiveClassName);
      changeClassName(0, menuLinks[2], ActiveClassName);
   }
   else if(getScrollPos() > 50 && getScrollPos() < 75){
      changeClassName(1, menuLinks[2], ActiveClassName);
      changeClassName(0, menuLinks[1], ActiveClassName);
      changeClassName(0, menuLinks[3], ActiveClassName);
   }
   else if(getScrollPos() > 75){
      changeClassName(1, menuLinks[3], ActiveClassName);
      changeClassName(0, menuLinks[2], ActiveClassName);
   }
   
});








