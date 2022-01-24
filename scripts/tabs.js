const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title') //получим заголовок, чтобы менять его текстовое содержимое
    const tabsPrice = document.querySelector('.card-details__price')
    const tabsImage = document.querySelector('.card__image_item') //получим изображения
    const tabsMemory = document.querySelector('.description__memory')
    const pageTitle = document.querySelector('title')
    const tabsOptions = [ //создадим массив с табами, добавим в массив 3 объекта, поскольку имеем 3 таба
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
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}` 
        tabsPrice.textContent = `${tabsOptions[index].price}₽`
        //ДЛЯ СМЕНЫ ИЗОБРАЖЕНИЙ НЕОБХОДИМО МЕНЯТЬ АТРИБУТ, сначала его нужно получить! эта команда принимает 2 аргумента, какой атрибут нужно получить и его значение
        tabsMemory.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory}GB`
        tabsImage.setAttribute('src', tabsOptions[index].image)
        pageTitle.textContent = `iPhone ${tabsOptions[index].name}`
    }
    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')
            if(index === indexClickedTab) { //если кнопка с индексом имеет тот же самый индекс, который в неё передан, то присваиваем класс, а с других убираем
                tab.classList.add('active')
            }
        })
        changeContent(indexClickedTab)//вызовем функцию смены контента в момент выбора таба
    }
    tabs.forEach((tab, index) => { //переберем табы и индексы
        tab.addEventListener('click', () => {
            changeActiveTabs(index) //по клику вызываем функцию, в которую передаем индекс
        })
    })
    
    changeContent(0) //вызовем фунуию внизу и передадим в неё индекс 0 чтобы при перезагрузке страницы не вставало изначальное значение из верстки
}

tabsFunc()