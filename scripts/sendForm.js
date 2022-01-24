const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.modal__title')
    const modalClose = modal.querySelector('.modal__close')
    const btnSubmit = document.querySelector('.modal__submit')
    const modalForm = modal.querySelector('form')

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modal.style.opacity = '0'; 
        setTimeout(() => {
            modal.style.opacity = '1'; 
            modal.style.transition = '.6s all';
        }, 1);
        btnSubmit.innerHTML = 'Заказать доставку'
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    modalClose.addEventListener('click', () => {
        setTimeout(() => {
            modal.style.opacity = '0'
            modal.style.transition = '0.6s opacity'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 600)
            
        }, 1)
    })
    const success = () => {
        btnSubmit.innerHTML = ''
        btnSubmit.insertAdjacentHTML('beforeend', `
        <span>Ваша заявка на доставку принята в работу!:)</span>`)
        setTimeout(() => {
            modal.style.opacity = '0'
            modal.style.transition = '0.6s opacity'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 600)
        }, 1500)
    }
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const labels = modal.querySelectorAll('.modal__label') //получим все лейблы, в которых будем искать спаны и инпуты
        const sendMessage = {} //создадим пустой объект для сбора в него данных с формы 
        labels.forEach(label => { //перебрем лейблы
            const span = label.querySelector('span') //получим спаны
            const input = label.querySelector('input')//получим инпуты
            sendMessage[span.textContent] = input.value
        })
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then(() => {
                console.log('Отправлено')
            })
            setTimeout(success, 500)
            modalForm.reset()
    })
}

sendForm()