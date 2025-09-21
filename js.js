// Получаем кнопку и создаем контейнер для списка
const button = document.querySelector('#whe-me button');
let listContainer;

// Функция для создания и показа списка
function showList() {
    // Проверяем, существует ли уже список
    if (!listContainer) {
        // Создаем контейнер для списка
        listContainer = document.createElement('ul');
        listContainer.classList.add('advantages-list');
        
        // Добавляем пункты списка
        const advantages = [
            'Быстро учусь новым инструментам и технологиям',
            'Ответственно подхожу к выполнению задач',
            'Внимательно отношусь к деталям',
            'Я хочу, чтобы моя работа приносила пользу, и было бы больше довольных людей хорошим и протестированным продуктом',
            'Готова работать в команде и развиваться'
        ];
        
        advantages.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listContainer.appendChild(li);
        });
        
        // Добавляем контейнер в DOM после кнопки
        button.after(listContainer);
    } else {
        // Если список уже есть - скрываем его
        listContainer.style.display = listContainer.style.display === 'none' ? '' : 'none';
    }
}

// Добавляем обработчик события
button.addEventListener('click', showList);