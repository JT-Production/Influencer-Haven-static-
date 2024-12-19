

/* Loader*/
var loaderWrapper = document.querySelector('.wrapper');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    loaderWrapper.style.opacity = '0';

    setTimeout(() =>{
        loaderWrapper.style.display = 'none';
    },1000)
})
