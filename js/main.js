// меняет бургер на кретстик
// t = document.querySelector(".header-btn"),
//     n = document.querySelector(".popup-menu"),
//     r = document.querySelector(".popup-mob"),
//     i = document.querySelector(".header"),
//     o = document.body, t && (t.addEventListener("click", (function () {
//     t.classList.contains("active") ? (t.classList.remove("active"),
//         innerWidth < 767 ? (r.classList.remove("active"),
//     o.style.overflow = "visible", i.style.zIndex = "unset") : n.classList.remove("active")) : (t.classList.add("active"),
//         innerWidth < 767 ? (r.classList.add("active"), o.style.overflow = "hidden", i.style.zIndex = "100000") : n.classList.add("active"))
// })));

document.addEventListener("DOMContentLoaded", function() {

    const toggleButton = document.querySelector(".header-btn");
    const popupMenu = document.querySelector(".popup-menu");
    const popupMob = document.querySelector(".popup-mob");
    const header = document.querySelector(".header");
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (toggleButton.classList.contains("active")) {
                toggleButton.classList.remove("active");
                if (innerWidth < 1070) {
                    popupMob.classList.remove("active");
                    body.style.overflow = "visible";
                    header.style.zIndex = "unset";
                } else {
                    popupMenu.classList.remove("active");
                }
            } else {
                toggleButton.classList.add("active");
                if (innerWidth < 1070) {
                    popupMob.classList.add("active");
                    body.style.overflow = "hidden";
                    header.style.zIndex = "100000";
                } else {
                    popupMenu.classList.add("active");
                }
            }
        });
    }

});



//выпадающий список
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
    let regionFoodSafetySelect = document.getElementById('RegionFoodSafety');
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

    if (regionFoodSafetySelect) {
        $(regionFoodSafetySelect).select2();
    }

    if (educationSelect) {
        $(educationSelect).select2();
    }
});

// подробнее слайдер
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для модального окна
    let modalManager = new ModalManager();
    modalManager.createModal();

    // Находим все кнопки "Подробнее"
    let buttons = document.querySelectorAll('[data-modal-id="participation-modal"][data-modal-open=""]');
    // Находим элемент модального окна
    let modal = document.getElementById('participation-modal');

    // Находим все кнопки "Подробнее" во втором блоке
    let secondDetailButtons = document.querySelectorAll('.steps__item-buttons button[data-modal-id="steps-modal"][data-modal-open=""]');

    // Проходимся по каждой кнопке и добавляем обработчик события клика
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

            // Находим родительский элемент кнопки, который содержит модальное окно
            let parentSlide = button.closest('.participation__slide');
            let rulesList = parentSlide.querySelector('.participation__slide-rules');
            let documentsList = parentSlide.querySelector('.participation__slide-documents');


            if (rulesList && documentsList) {
                // Находим элементы, в которые будем вставлять данные в модальном окне
                let rulesListContainer = modal.querySelector('.participation__rules-list--participate');
                let documentsListContainer = modal.querySelector('.participation__rules-list--documents');

                if (rulesListContainer && documentsListContainer) {

                    // Очищаем контейнеры перед вставкой новых данных
                    rulesListContainer.innerHTML = '';
                    documentsListContainer.innerHTML = '';

                    // Копируем элементы из текущего блока в модальное окно
                    rulesList.querySelectorAll('li').forEach(function(rule) {
                        rulesListContainer.appendChild(rule.cloneNode(true));
                    });
                    documentsList.querySelectorAll('li').forEach(function(document) {
                        documentsListContainer.appendChild(document.cloneNode(true));
                    });

                    // Вставляем текст из <p> в <h2> модального окна
                    let slideContentText = parentSlide.querySelector('.participation__slide-content p').textContent;
                    let modalTitle = modal.querySelector('h2');
                    modalTitle.textContent = slideContentText;

                    // Показываем модальное окно
                    modal.classList.remove('custom-modal__hidden');
                }
            }

        });
    });

    secondDetailButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            // Находим родительский элемент кнопки, который содержит скрытый блок с подробностями
            let parentItem = button.closest('.steps__item');
            let hiddenBlock = parentItem.querySelector('.steps__item-hidden');

            if (hiddenBlock) {

                // Находим элемент, в который будем вставлять данные в модальном окне
                let hiddenBlockContainer = document.getElementById('steps-modal');

                if (hiddenBlockContainer) {
                    // Очищаем контейнер перед вставкой новых данных
                    hiddenBlockContainer.innerHTML = '';

                    //Копируем элемент из скрытого блока в модальное окно
                    hiddenBlockContainer.appendChild(hiddenBlock.cloneNode(true));

                    // Показываем модальное окно
                    let childHiddenElement = hiddenBlockContainer.querySelector('.steps__item-hidden');
                    if (childHiddenElement) {
                        childHiddenElement.classList.remove('steps__item-hidden');
                    }

                }
            }
        });
    });

});

document.addEventListener('click', function(event) {
    // var modalManager = new ModalManager();
    var modal = document.querySelector('.custom-modal.active');
    var overlay = event.target.closest('.custom-modal__overlay[data-modal-close]');

    if (modal && overlay) {
        modalManager.closeModal();
    }
});



var ModalManager = function () {
    function ModalManager() {
        if (!(this instanceof ModalManager)) {
            throw new TypeError("Cannot call a class as a function");
        }

        this.modal = null;
        this.modalInset = null;
        this.modalContent = null;
        this.documentClickHandler = this.documentClickHandler.bind(this);
        this.body = document.body;
        this.init();
    }

    ModalManager.prototype.init = function () {
        this.createModal();
        document.addEventListener("click", this.documentClickHandler);
    };

    ModalManager.prototype.documentClickHandler = function (event) {
        var target = event.target;

        if (target.closest("[data-modal-close]") && target.closest("[data-modal-open]")) {
            this.closeModal();
            var self = this;
            setTimeout(function () {
                self.modalInset.innerHTML = "";
                self.openModal(target);
            }, 50);
        } else if (target.closest("[data-modal-close]")) {
            this.closeModal();
        } else if (target.closest("[data-modal-open]")) {
            event.preventDefault();
            var self = this;
            setTimeout(function () {
                self.modalInset.innerHTML = "";
                self.openModal(target);
            }, 50);
        }
    };

    ModalManager.prototype.openModal = function (trigger) {
        let modalId = trigger.closest("[data-modal-open]").getAttribute("data-modal-id");
        // console.log(trigger)
        this.modalContent = document.getElementById(modalId);
        this.modalInset.append(this.modalContent);
        this.modal.classList.add("active");
        this.body.classList.add("scroll-lock");
    };

    ModalManager.prototype.closeModal = function () {
        if (this.modal) {
            this.modal.classList.remove("active");
            let hiddenSection = document.createElement('section');
            hiddenSection.classList.add('d-none');
            this.modalContent.classList.add("custom-modal__hidden");
            hiddenSection.appendChild(this.modalContent);
            this.body.append(hiddenSection);
        }
        this.body.classList.remove("scroll-lock");
    };


    ModalManager.prototype.createModal = function () {
        if (!this.modal) {
            // this.body.classList.add("scroll-lock");
            this.modal = document.createElement("div");
            this.modal.classList.add("custom-modal");
            document.body.append(this.modal);
            this.modal.innerHTML = '\
                <div class="custom-modal__wrapper">\
                    <div class="custom-modal__overlay" data-modal-close></div>\
                        <div class="custom-modal__content">\
                            <div class="custom-modal__inset"></div>\
                            <button type="button" class="custom-modal-close" data-modal-close></button>\
                        </div>\
                </div>\
            ';
            this.modalInset = document.querySelector(".custom-modal__inset");
        }
    };

    return ModalManager;
}();

document.getElementById('form-app').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var fields = form.querySelectorAll('.form__input');
    var isValid = true;

    fields.forEach(function(field) {
        var fieldName = field.getAttribute('name');
        var fieldValue = field.value;
        var fieldType = field.getAttribute('type');
        var messageContainer = field.nextElementSibling;

        if (fieldType !== 'submit' && fieldType !== 'hidden') {
            if (fieldName in s) {
                isValid = s[fieldName](fieldValue, messageContainer) && isValid;
            }
        }
    });

    if (isValid) {
        console.log(12221212)
        // Отправка формы
        form.submit();
    } else {
        // Форма недействительна, не отправлять
        return false;
    }
});

// ajax start
document.getElementById('form-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    let firstName = document.querySelector('input[name="FirstName"]').value;
    let phone = document.querySelector('input[name="Phone"]').value;
    let email = document.querySelector('input[name="Email"]').value;

    // Проверяем валидность телефона
    if (!validatePhone(phone)) {
        alert('Некорректный номер телефона');
        return;
    }

    // Проверяем валидность email
    if (!validateEmail(email)) {
        alert('Некорректный email');
        return;
    }

    // Проверяем длину имени
    if (firstName.length < 2) {
        alert('Имя должно содержать не менее 2 символов');
        return;
    }


    let region = document.querySelector('.region_class').value;
    window.location.href = region;



    // Раскомитить как будет ПОЧТА
    // let url = "mail.php";
    // let formData = new FormData(document.getElementById('form-app'));
    //
    // fetch(url, {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('ok');
    //             // Если запрос успешный, показываем благодарность
    //             document.getElementById('success-modal').style.display = 'block';
    //         }
    //     })
    //     .catch(error => console.error('Ошибка отправки данных:', error));
});
// ajax end


document.getElementById("phone").addEventListener("input", function(event) {
    // Получаем значение поля ввода
    let inputValue = event.target.value;

    // Очищаем значение от всех символов, кроме цифр
    let cleanedValue = inputValue.replace(/\D/g, "");

    // Определяем, начинается ли номер с кода страны +7, 7 или 8
    if (/^(7|8|\+7)/.test(cleanedValue)) {
        // Если да, добавляем код страны и форматируем номер
        let formattedValue = "+7 (" + cleanedValue.slice(1, 4) + ") " + cleanedValue.slice(4, 7) + "-" + cleanedValue.slice(7, 9) + "-" + cleanedValue.slice(9, 11);
        // Устанавливаем отформатированное значение обратно в поле ввода
        event.target.value = formattedValue;
    } else if (/^(1|2|3|4|5|6|9)/.test(cleanedValue)) {
        // Если да, добавляем код страны +7 перед этой цифрой
        let formattedValue = "+7 (9" + cleanedValue.slice(1, 4) + ") " + cleanedValue.slice(4, 7) + "-" + cleanedValue.slice(7, 9) + "-" + cleanedValue.slice(9, 11);
        // Устанавливаем отформатированное значение обратно в поле ввода
        event.target.value = formattedValue;
    }
    else {
        // Если нет, выводим только введенные цифры без форматирования
        event.target.value = cleanedValue;
    }
});




// закрывать окошко
document.addEventListener('DOMContentLoaded', function() {
// Получаем элемент модального окна
    let modal = document.getElementById('success-modal');

    // Получаем элемент крестика для закрытия модального окна
    let closeModalBtn = modal.querySelector('.close-modal');

    // При клике на крестик закрываем модальное окно
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

});

// При клике вне модального окна также закрываем его
// window.addEventListener('click', function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// });


// Функция для проверки телефона
function validatePhone(phone) {
    var phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
}

// Функция для проверки email
function validateEmail(email) {
    var emailRegex = /.+@.+\..+/;
    return emailRegex.test(email);
}

// регионы
// Загрузка данных из файла region.json
fetch('region.json')
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Regions');

        // Создание элементов <option> для каждого объекта в данных
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.link; // Значение равно ссылке
            option.textContent = item.region; // Текстовое содержимое равно названию региона
            selectElement.appendChild(option); // Добавляем <option> в <select>
        });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));


// Загрузка данных из файла regionfoodsafety.json
fetch('regionfoodsafety.json')
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('RegionFoodSafety');

        // Создание элементов <option> для каждого объекта в данных
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.link; // Значение равно ссылке
            option.textContent = item.region; // Текстовое содержимое равно названию региона
            selectElement.appendChild(option); // Добавляем <option> в <select>
        });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));





