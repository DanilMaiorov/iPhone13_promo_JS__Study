const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const extraLink = document.querySelector('.card-details__link-characteristics');
    const arrLinks = [...links, extraLink];
    seamless.polyfill();
    
    arrLinks.forEach(element => {
        element.addEventListener('click', (e) => { //делаем плавный скролл
            e.preventDefault();
            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);
            if(section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                });
            } else {
                seamless.elementScrollIntoView(document.querySelector('#characteristics'), {
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        });
    });
};
scrollFunc();