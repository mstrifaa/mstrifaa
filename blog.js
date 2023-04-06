const searchBar = document.querySelector("input")
const searchIcon = document.querySelector(".search-submit");

searchBar.addEventListener('keyup', (event)=>{
    if(event.target.value!==''){
        console.log(event.target.value)
        searchIcon.disabled = false;
    }
    else{
        searchIcon.disabled = true;
    }

})
console.log(searchBar)