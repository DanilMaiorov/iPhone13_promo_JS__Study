const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title'); 
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const tabsMemory = document.querySelector('.description__memory');
    const pageTitle = document.querySelector('title');
    const tabsOptions = [ 
        {
            name: 'Graphite', 
            memory: '128',
            price: 70000,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver', 
            memory: '256',
            price: 85000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue', 
            memory: '512',
            price: 100000,
            image: 'img/iPhone-sierra_blue.webp'
        },
    ]
    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}` ;
        tabsPrice.textContent = `${tabsOptions[index].price}₽`;
        
        tabsMemory.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory}GB`;
        tabsImage.setAttribute('src', tabsOptions[index].image);
        pageTitle.textContent = `iPhone ${tabsOptions[index].name}`;
    };
    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');
            if(index === indexClickedTab) {
                tab.classList.add('active');
            }
        });
        changeContent(indexClickedTab);
    };
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index); 
        });
    });
    
    changeContent(0);
};

tabsFunc();