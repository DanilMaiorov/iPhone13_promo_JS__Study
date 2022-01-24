const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    const extraLink = document.querySelector('.card-details__link-characteristics') //нахожу нужную ссылку по домашке
    const arrLinks = [...links, extraLink] //делаю один массив со списком ссылок и дополнительной ссылкой по домашке и дальше работаю уже с массивом
    seamless.polyfill() //запуск полифила
    
    arrLinks.forEach(element => {
        element.addEventListener('click', (e) => { //делаем плавный скролл
            e.preventDefault()
            const id = element.getAttribute('href').substring(1) //по клику создаем переменную и получаем атрибут и обрежем первый символ чтобы получить значение без #
            const section = document.getElementById(id)
            if(section) { //если данная секция существует, то обращаемся к ней и делаем плавный скролл
                section.scrollIntoView({ //поддерживается не всеми браузерами, подключим еще 1 скрипт - полифилл и запустим его
                    behavior: 'smooth',
                    block: 'start',
                }) // в поле else пишем сам полифилл
            } else {
                seamless.elementScrollIntoView(document.querySelector('#characteristics'), {
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                })
            }
        })
    })
}
scrollFunc()