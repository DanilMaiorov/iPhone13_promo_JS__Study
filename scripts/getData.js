const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const btn = document.querySelector('.cross-sell__add')

    let stack = 4 //переменная, которая юудет говорить по сколько карточек по нажатию на кнопку показать еще будем выводить
    let count = 1

    const render = (data) => { //функция отрисовки
        list.innerHTML = ''
        data.forEach(item => {
            list.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `)
        })
    }
    const sliceArray = (data, index) => { //функция отвечающая за отрезки от нашего масива данных определенных участков
        return data.slice(0, index)
    }
    const changeData = (data) => {
        const newStack = stack * count //переменная увеличения отрисовывыемых карточек
        render(sliceArray(data, newStack)) //вызываем функцию рендер, которую прогоняем через слайс, чтобы указать по сколько карточек будем выводить на рендер
        if(data.length > newStack) { //если длина даты больше, чем newStack
            count++ //будем увеличивать count на 1
        } else {
            //убираем кнопку, для этого нам нужно замкнуть fetch в новой функции
            btn.style.display = 'none'
        }
    }
    const getGoods = () => {
        fetch('./cross-sell-dbase/dbase.json') //получаем данные и конвертируем их
        .then((res) => {
            if(res.ok) {
                return res.json() //если запрос ок, то ок, если нет, то выкинеи ошибку
            } else {
                throw new Error('Ошибка в получении данных')
            }
        })
        .then((data) => {
            changeData(data) //вызываем changeData сразу как получаем данный с сервера 
        })
        .catch((error) => {
            console.error(error.message)
        })
        .finally(() => {
            console.log('finally');
        })
        }
        btn.addEventListener('click', getGoods) //каждый раз по клику на Показать еще будем вызывать функцию получения данных и проделывать с ними все описанные операции
        getGoods()
    }

    getData()