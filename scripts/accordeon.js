const accordeon = () => {
    const charItems = document.querySelectorAll('.characteristics__item');
    
charItems.forEach((item, index) => {
    const charBtn = item.querySelector('.characteristics__title');
    const charContent = item.querySelector('.characteristics__description');

    const removeAccActive = (btn, content) => {
        btn.classList.remove('active');
        content.classList.remove('open');
    };
    removeAccActive(charBtn, charContent);

    const accordeonToggle = (item) => {
        const charBtn = item.querySelector('.characteristics__title');
        const charContent = item.querySelector('.characteristics__description');
        if(charContent.classList.contains('open')) {
            charContent.style.height = '';
        } else {
            charContent.style.height = charContent.scrollHeight + 'px';
        } 
        charBtn.classList.toggle('active');
        charContent.classList.toggle('open');          
    };
    charBtn.addEventListener('click', () => {
        accordeonToggle(item);
        charItems.forEach((closeItem, closeIndex) => {
            const charContent = closeItem.querySelector('.characteristics__description');
            if(charContent.classList.contains('open') && closeIndex !== index) {
                accordeonToggle(closeItem);
            }
        });
    });
});
};
accordeon();