const header = document.querySelector('.header');

function headerBlur() {
    if(window.scrollY > 70){
        header.style.background = 'linear-gradient(40deg, #2c555c 0%, #44203c 70%)';
        header.style.boxShadow = '0px 0px 10px #1a191e';
        console.log('FOi');
    } else {
        header.style.background = '';
        header.style.boxShadow = '';
    }
}

window.addEventListener('scroll', headerBlur)