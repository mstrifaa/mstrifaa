//pre-loader
window.addEventListener('load', e => {
    document.querySelector("#pre-loader").remove();
})



// adding transition to navigation menu
const navSticky = document.querySelector("#nav-bars");
window.addEventListener('scroll', (e)=>{
    navSticky.classList.toggle('nav-sticky', window.scrollY >= navSticky.offsetHeight+40)
})

// toggling hamburger menu
const openingIcon = document.querySelector("#icon-for-nav-small");
const closingIcon = document.querySelector("#icon-to-close-nav-small");
const smallMenu = document.querySelector("#nav-small");

openingIcon.addEventListener('click', function(event){
    smallMenu.style.width = '250px';
})

closingIcon.addEventListener('click', function(event){
    smallMenu.style.width = '0px';
})

// toggling 'show more' option
const showMoreOpts = document.querySelectorAll(".show-more-opt");
console.log(showMoreOpts)

showMoreOpts.forEach( (element) =>

    element.addEventListener('click', function(event){
        if(event.target.innerHTML==='Show more'){
            
            console.log(event.target.parentElement)

            event.target.previousElementSibling.style.overflow = 'auto';
            event.target.parentElement.style.height = 'max-content';

            event.target.innerHTML='Show less';
            
        }
        else if(event.target.innerHTML==='Show less'){

            event.target.previousElementSibling.style.overflow = 'hidden';
            event.target.parentElement.style.height = '30vh';

            event.target.innerHTML='Show more';
        
        }
    
}))

// TODO:: display show-more container only when skill-description exceeds container's initial height (30vh)
