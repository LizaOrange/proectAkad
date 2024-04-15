// меняет бургер на кретстик
t = document.querySelector(".header-btn"),
    n = document.querySelector(".popup-menu"),
    r = document.querySelector(".popup-mob"),
    i = document.querySelector(".header"),
    o = document.body, t && (t.addEventListener("click", (function () {
    t.classList.contains("active") ? (t.classList.remove("active"),
        innerWidth < 767 ? (r.classList.remove("active"),
    o.style.overflow = "visible", i.style.zIndex = "unset") : n.classList.remove("active")) : (t.classList.add("active"),
        innerWidth < 767 ? (r.classList.add("active"), o.style.overflow = "hidden", i.style.zIndex = "100000") : n.classList.add("active"))
})));


//выподающий список
document.addEventListener("DOMContentLoaded", function() {
    let moduleButtons = document.querySelectorAll('.program__module-button');

    moduleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let moduleContent = this.previousElementSibling;

            // Переключаем класс active и плавно показываем/скрываем содержимое модуля
            if (moduleContent.style.maxHeight) {
                moduleContent.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                moduleContent.style.maxHeight = moduleContent.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    });
});

//кнопка "показать еще"
document.addEventListener("DOMContentLoaded", function() {
    let modules = document.querySelectorAll('.program__module');
    let showButton = document.querySelector('.show-button');
    let numToShow = 4; // Количество модулей для отображения при первой загрузке
    let numToIncrement = 4; // Количество модулей для добавления при каждом нажатии на кнопку
    let totalModules = modules.length;

    // Показать только первые модули
    for (let i = 0; i < totalModules; i++) {
        if (i < numToShow) {
            modules[i].style.display = 'block';
        } else {
            modules[i].style.display = 'none';
        }
    }

    // Обработчик клика на кнопку "Показать еще" или "Свернуть"
    showButton.addEventListener('click', function() {
        let currentlyShown = document.querySelectorAll('.program__module[style="display: block;"]');
        let numCurrentlyShown = currentlyShown.length;

        if (this.textContent === 'Показать еще') {
            // Если есть еще модули для показа
            if (numCurrentlyShown < totalModules) {
                for (let i = numCurrentlyShown; i < numCurrentlyShown + numToIncrement && i < totalModules; i++) {
                    modules[i].style.display = 'block';
                }
                // Если показаны все модули
                if (numCurrentlyShown + numToIncrement >= totalModules) {
                    this.textContent = 'Свернуть';
                }
            }
        } else {
            // Скрыть дополнительные модули
            for (let i = numToShow; i < totalModules; i++) {
                modules[i].style.display = 'none';
            }
            this.textContent = 'Показать еще';
            // Прокрутить страницу к началу блока с модулями
            document.getElementById('program_start').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//форма заявки
document.addEventListener("DOMContentLoaded", function() {
    // Получите ссылки на ваши элементы select
    let categorySelect = document.getElementById('Category');
    let employmentFormatSelect = document.getElementById('EmploymentFormat');
    let regionsSelect = document.getElementById('Regions');
    let educationSelect = document.getElementById('Education');

    // Инициализация Select2 для каждого элемента select
    if (categorySelect) {
        $(categorySelect).select2();
    }

    if (employmentFormatSelect) {
        $(employmentFormatSelect).select2();
    }

    if (regionsSelect) {
        $(regionsSelect).select2();
    }

    if (educationSelect) {
        $(educationSelect).select2();
    }
});




