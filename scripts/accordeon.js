const accordeon = () => {
    const charItems = document.querySelectorAll('.characteristics__item') //найдем все элементы
    
charItems.forEach((item, index) => { //переберем
    const charBtn = item.querySelector('.characteristics__title')
    const charContent = item.querySelector('.characteristics__description')

    const removeAccActive = (btn, content) => { //функция закрытия активных блоков при обновлении страницы
        btn.classList.remove('active')
        content.classList.remove('open')
    }
    removeAccActive(charBtn, charContent)

    const accordeonToggle = (item) => {
        const charBtn = item.querySelector('.characteristics__title')
        const charContent = item.querySelector('.characteristics__description')
        if(charContent.classList.contains('open')) { //если этот класс есть, то
            //charContent.classList.remove('open') //по клику убираем даем класс open
            charContent.style.height = '' //задаем нулевую высоту 
        } else {
            //charContent.classList.add('open') //по клику даем класс open
            charContent.style.height = charContent.scrollHeight + 'px' //задаем высоту равную изначальной высоте блока
        } 
        charBtn.classList.toggle('active') //меняем класс у контента
        charContent.classList.toggle('open') //меняем класс у контента           
    }
    charBtn.addEventListener('click', () => { //слушатель по клику
        accordeonToggle(item) //по клику вызываем функцию
        charItems.forEach((closeItem, closeIndex) => { //переберем массив еще раз и обозначим индес закрывабщего блока и сам закрывающийся блок
            const charContent = closeItem.querySelector('.characteristics__description') //найдем его
            if(charContent.classList.contains('open') && closeIndex !== index) { //если закрывающийся блок имеет класс open и и его индекс не совпадает не совпадает с индексом закрытия, то вызываем функцию вновь и передаем в неё закрывающийся блок
                accordeonToggle(closeItem)
            }
        })
    })
})
} 
accordeon()