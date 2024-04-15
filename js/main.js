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
    var modules = document.querySelectorAll('.program__module');
    var showButton = document.querySelector('.show-button');
    var numToShow = 4; // Количество модулей для отображения при первой загрузке
    var numToIncrement = 4; // Количество модулей для добавления при каждом нажатии на кнопку
    var totalModules = modules.length;

    // Показать только первые модули
    for (var i = 0; i < totalModules; i++) {
        if (i < numToShow) {
            modules[i].style.display = 'block';
        } else {
            modules[i].style.display = 'none';
        }
    }

    // Обработчик клика на кнопку "Показать еще"
    showButton.addEventListener('click', function() {
        var currentlyShown = document.querySelectorAll('.program__module[style="display: block;"]');
        var numCurrentlyShown = currentlyShown.length;

        // Если есть еще модули для показа
        if (numCurrentlyShown + numToIncrement <= totalModules) {
            for (var i = numCurrentlyShown; i < numCurrentlyShown + numToIncrement; i++) {
                modules[i].style.display = 'block';
            }
            // Если показаны все модули
            if (numCurrentlyShown + numToIncrement >= totalModules) {
                this.textContent = 'Свернуть';
            }
        } else { // Скрыть дополнительные модули
            for (var i = numCurrentlyShown; i < totalModules; i++) {
                modules[i].style.display = 'none';
            }
            this.textContent = 'Показать еще';
        }
    });
});

//форма заявки
document.addEventListener("DOMContentLoaded", function() {
    // Получите ссылки на ваши элементы select
    var categorySelect = document.getElementById('Category');
    var employmentFormatSelect = document.getElementById('EmploymentFormat');
    var regionsSelect = document.getElementById('Regions');
    var educationSelect = document.getElementById('Education');

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




