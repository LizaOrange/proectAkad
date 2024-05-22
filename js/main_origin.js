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
    let regionsSupervizorSelect = document.getElementById('RegionsSupervizor');
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
    if (regionsSupervizorSelect) {
        $(regionsSupervizorSelect).select2();
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
    let modalManager = new ModalManager();
    modalManager.createModal();
    let buttons = document.querySelectorAll('[data-modal-id="participation-modal"][data-modal-open=""]');
    let modal = document.getElementById('participation-modal');
    let secondDetailButtons = document.querySelectorAll('.steps__item-buttons button[data-modal-id="steps-modal"][data-modal-open=""]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let parentSlide = button.closest('.participation__slide');
            let rulesList = parentSlide.querySelector('.participation__slide-rules');
            let documentsList = parentSlide.querySelector('.participation__slide-documents');
            if (rulesList && documentsList) {
                let rulesListContainer = modal.querySelector('.participation__rules-list--participate');
                let documentsListContainer = modal.querySelector('.participation__rules-list--documents');
                if (rulesListContainer && documentsListContainer) {
                    rulesListContainer.innerHTML = '';
                    documentsListContainer.innerHTML = '';
                    rulesList.querySelectorAll('li').forEach(function(rule) {
                        rulesListContainer.appendChild(rule.cloneNode(true));
                    });
                    documentsList.querySelectorAll('li').forEach(function(document) {
                        documentsListContainer.appendChild(document.cloneNode(true));
                    });
                    let slideContentText = parentSlide.querySelector('.participation__slide-content p').textContent;
                    let modalTitle = modal.querySelector('h2');
                    modalTitle.textContent = slideContentText;
                    modal.classList.remove('custom-modal__hidden');
                }
            }
        });
    });
    secondDetailButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let parentItem = button.closest('.steps__item');
            let hiddenBlock = parentItem.querySelector('.steps__item-hidden');
            if (hiddenBlock) {
                let hiddenBlockContainer = document.getElementById('steps-modal');
                if (hiddenBlockContainer) {
                    hiddenBlockContainer.innerHTML = '';
                    hiddenBlockContainer.appendChild(hiddenBlock.cloneNode(true));
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
// ajax start
document.getElementById('form-btn').addEventListener('click', function(e) {
    e.preventDefault();
    showLoader();

    let firstName = document.querySelector('input[name="FirstName"]').value;
    let phone = document.querySelector('input[name="Phone"]').value;
    let email = document.querySelector('input[name="Email"]').value;
    if (!validatePhone(phone)) {
        alert('Некорректный номер телефона');
        hideLoader();
        return;
    }
    if (!validateEmail(email)) {
        alert('Некорректный email');
        hideLoader();
        return;
    }
    if (firstName.length < 2) {
        alert('Имя должно содержать не менее 2 символов');
        hideLoader();
        return;
    }

    let categoryText = $('#Category').select2('data')[0].text;
    let employmentText = $('#EmploymentFormat').select2('data')[0].text;
    let educationText = $('#Education').select2('data')[0].text;
    let regionText = $('.region_class').select2('data')[0].text;
    let programText = document.querySelector('input[name="Program"]').value;

    if (categoryText == 'Ваша категория') {
        alert('Выберите категорию');
        hideLoader();
        return;
    }
    if (employmentText == 'Трудоустройство') {
        alert('Выберите трудоустройство');
        hideLoader();
        return;
    }
    if (educationText == 'Ваше образование') {
        alert('Выберите образование');
        hideLoader();
        return;
    }

    const pdCheckbox = document.getElementById('form-check--pd');
    const pkCheckbox = document.getElementById('form-check--pk');

    if (!pdCheckbox.checked) {
        alert('Чтобы продолжить, нужно дать согласие на обработку персональных данных');
        hideLoader();
        return;
    }
    if (!pkCheckbox.checked) {
        alert('Чтобы продолжить, нужно согласиться с политикой конфиденциальности');
        hideLoader();
        return;
    }
    if (regionText == 'Ваш регион') {
        alert('Выберите регион');
        hideLoader();
        return;
    }

    hideLoader();
    let modalElement = document.querySelector('.appearing-modal.custom-modal__hidden');
    // Проверяем, что элемент найден
    if (modalElement) {
        // Добавляем класс "active"
        modalElement.classList.add('active');

        // Создаем и добавляем затемнение фона
        let overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);

        // Добавляем класс к body для предотвращения прокрутки
        document.body.classList.add('modal-open');

        // Находим кнопку закрытия
        let closeButton = modalElement.querySelector('.modal-close');

        // Добавляем обработчик события для закрытия модального окна через кнопку
        closeButton.addEventListener('click', function() {
            closeModal(modalElement, overlay);
        });

        // Добавляем обработчик события для закрытия модального окна при клике на затемненный фон
        overlay.addEventListener('click', function() {
            closeModal(modalElement, overlay);
        });
    } else {
        console.error('Элемент с классом "appearing-modal custom-modal__hidden" не найден.');
    }


    // AJAX запрос для записи данных в файл
    fetch('write_log_data_to_file.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            phone: phone,
            email: email,
            category: categoryText,
            employment: employmentText,
            education: educationText,
            region: regionText,
            program: programText
        })
    })
        .then(response => {
            if (response.ok) {
                hideLoader();
                console.log('Данные успешно записаны в файл');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });


    let success_type = this.dataset.success;
    let region = document.querySelector('.region_class').value;


    let data = {
        'FIELDS': {
            'TITLE': 'Новая форма с лендинга',
            'NAME': firstName,
            'EMAIL': [{
                'VALUE': email,
                'VALUE_TYPE': 'WORK'
            }],
            'PHONE': [{
                'VALUE': phone,
                'VALUE_TYPE': 'WORK'
            }],
            'UF_CRM_1714128589': categoryText,
            'UF_CRM_1714128570': employmentText,
            'UF_CRM_1714128542': educationText,
            'UF_CRM_1714128525': regionText,
            'UF_CRM_1714144900': programText,
            'SOURCE_ID': 'WEB'
        }
    };
    let jsonData = JSON.stringify(data);
    fetch('https://szcosmosacademy.bitrix24.ru/rest/6/3mecasiz0mskt99g/crm.lead.add.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => {
            if (response.ok) {
                // if(success_type === 'true'){
                //     window.location.href = 'https://cosmos-academy.ru/success.php';
                // }else{
                //     window.location.href = region;
                // }
                console.log('success');
            }
        })
        .catch(error => {
            hideLoader();
            alert('Ошибка отправки формы: '+ error);
        });

    setTimeout(function() {
        if(success_type === 'true'){
            window.location.href = 'https://cosmos-academy.ru/success.php';
        }else{
            window.location.href = region;
        }
    }, 7000); // 7 секунд

});

// Функция для закрытия модального окна и удаления затемнения фона
function closeModal(modalElement, overlay) {
    modalElement.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (overlay) {
        overlay.remove();
    }
}

function showLoader() {
    $('#loader-wrapper').css('display', 'flex'); // Показываем лоадер и его обертку
    $('#loader').css('display', 'block'); // Показываем лоадер
}

function hideLoader() {
    $('#loader-wrapper').css('display', 'none'); // Скрываем лоадер и его обертку
    $('#loader').css('display', 'none'); // Скрываем лоадер
}



document.getElementById("phone").addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let cleanedValue = inputValue.replace(/\D/g, "");
    if (/^(7|8|\+7)/.test(cleanedValue)) {
        let formattedValue = "+7 (" + cleanedValue.slice(1, 4) + ") " + cleanedValue.slice(4, 7) + "-" + cleanedValue.slice(7, 9) + "-" + cleanedValue.slice(9, 11);
        event.target.value = formattedValue;
    } else if (/^(1|2|3|4|5|6|9)/.test(cleanedValue)) {
        let formattedValue = "+7 (9" + cleanedValue.slice(1, 4) + ") " + cleanedValue.slice(4, 7) + "-" + cleanedValue.slice(7, 9) + "-" + cleanedValue.slice(9, 11);
        event.target.value = formattedValue;
    }
    else {
        event.target.value = cleanedValue;
    }
});
function validatePhone(phone) {
    var phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
}
function validateEmail(email) {
    var emailRegex = /.+@.+\..+/;
    return emailRegex.test(email);
}

const Regions = document.getElementById('Regions');
if(Regions){
    fetch('region.json')
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById('Regions');

            // Создание элементов <option> для каждого объекта в данных
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.link; // Значение равно ссылке
                option.textContent = item.region; // Текстовое содержимое равно названию региона
                Regions.appendChild(option); // Добавляем <option> в <select>
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
}

const RegionFoodSafety = document.getElementById('RegionFoodSafety');
if(RegionFoodSafety){
    fetch('regionfoodsafety.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.link;
                option.textContent = item.region;
                RegionFoodSafety.appendChild(option);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
}

const RegionsSupervizor = document.getElementById('RegionsSupervizor');
if(RegionsSupervizor){
    fetch('supervisor.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.link;
                option.textContent = item.region;
                RegionsSupervizor.appendChild(option);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
}





